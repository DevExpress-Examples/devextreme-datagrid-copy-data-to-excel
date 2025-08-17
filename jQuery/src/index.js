$(() => {
  function rowCopy(e) {
    const data = e.row.data;
    let str = '';

    // eslint-disable-next-line no-restricted-syntax
    for (const prop in data) {
      if (data[prop] !== undefined) {
        str += `${data[prop]}\t`;
      }
    }

    navigator.clipboard.writeText(str).then(() => {
      DevExpress.ui.notify('Row data copied to clipboard.', 'success', 500);
    }, () => {
      DevExpress.ui.notify('Row data was not copied. There are insufficient permissions for this action.', 'error', 500);
    });
  }

  function toolbarCopy(e) {
    e.toolbarOptions.items.push({
      widget: 'dxButton',
      location: 'after',
      options: {
        hint: 'Copy via Export',
        icon: 'unselectall',
        onClick: copyViaExcelExport,
      },
    });
  }

  function copyViaExcelExport(e) {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('dummy');
    let str = '';

    let col = grid.getVisibleColumns();
    // keep exportable columns and get the last-most column
    col = col.filter((x) => x.dataField !== undefined && x.allowExporting === true);
    const lastColumn = col[col.length - 1].dataField;

    DevExpress.excelExporter.exportDataGrid({
      component: grid,
      worksheet: sheet,
      customizeCell(options) {
        const { gridCell } = options;
        const field = gridCell.column.dataField;

        switch (gridCell.rowType) {
          // export header row
          case 'header':
            str += `${gridCell.column.caption}\t`;
            break;
            // export data row
          case 'data':
            str += `${gridCell.value}\t`;
            break;
            // export group row
          case 'group':
            if (gridCell.value) { str += `${field}: ${gridCell.value} `; }

            if (gridCell.groupSummaryItems !== undefined
                && gridCell.groupSummaryItems.length >= 1) {
              gridCell.groupSummaryItems.forEach((x) => {
                str += ` ${x.name}: ${x.value} `;
              });
            }
            str += '\t';
            break;
            // export groupFooter & totalFooter. Create a separate switch case if you need
          // different actions (ie different spacing)
          case 'groupFooter':
          case 'totalFooter':
            str += (gridCell.value === undefined ? '\t'
              : `${gridCell.totalSummaryItemName}: ${gridCell.value}\t`);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log('Unknown row type detected. Please check possible DataGrid breaking changes regarding rowType', gridCell);
            break;
        }

        if (field === lastColumn) {
          str += '\r\n';
        }
      },
    }).then(() => {
      // eslint-disable-next-line no-console
      console.log(str);
      navigator.clipboard.writeText(str).then(() => {
        DevExpress.ui.notify('Grid data copied to clipboard.', 'success', 500);
      }, () => {
        DevExpress.ui.notify('Grid data was not copied. There are insufficient permissions for this action.', 'error', 500);
      });
    });
  }

  const grid = $('#grid').dxDataGrid({
    dataSource: {
      store: {
        data,
        type: 'array',
        key: 'ID',
      },
    },
    editing: {
      mode: 'popup',
      allowAdding: true,
      allowUpdating: true,
      allowDeleting: true,
      useIcons: true,
    },
    allowColumnResizing: true,
    onToolbarPreparing: toolbarCopy,
    groupPanel: {
      visible: true,
    },
    filterRow: {
      visible: true,
    },
    summary: {
      groupItems: [{
        column: 'LastName',
        summaryType: 'count',
        name: 'Count',
        alignByColumn: true,
      }, {
        column: 'LastName',
        summaryType: 'count',
        name: 'Count',
      }, {
        column: 'IsTested',
        summaryType: 'count',
        showInGroupFooter: true,
        name: 'Count',
        alignByColumn: true,
      }],
      totalItems: [{
        column: 'ID',
        summaryType: 'count',
        displayFormat: 'No. of employees: {0}',
        name: 'No. of employees',
      }, {
        column: 'HireDate',
        summaryType: 'count',
        name: 'Dates',
      }],
    },
    columns: [{
      dataField: 'ID',
      width: '200',
    }, 'FirstName', 'LastName', 'HireDate', {
      dataField: 'Residence',
      groupIndex: 0,
    }, 'IsTested', {
      type: 'buttons',
      buttons: ['edit', 'delete', {
        hint: 'Copy row',
        icon: 'copy',
        onClick: rowCopy,
      }],
    }],
  }).dxDataGrid('instance');
});
