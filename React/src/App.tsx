import React, { Component, type RefObject } from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';

import DataGrid, {
  Editing,
  Column,
  GroupPanel,
  GroupItem,
  TotalItem,
  FilterRow,
  Summary,
  Button,
  type DataGridTypes,
} from 'devextreme-react/data-grid';
import { exportDataGrid } from 'devextreme/excel_exporter';
import notify from 'devextreme/ui/notify';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import * as ExcelJS from 'exceljs';
import { data } from './data';

const dataSource = new DataSource({
  store: new ArrayStore({
    data,
    key: 'ID',
  }),
});

interface RowData {
  ID: number;
  FirstName: string;
  LastName: string;
  HireDate: string;
  Residence: string;
  IsTested: boolean;
}

class App extends Component {
  private readonly gridRef: RefObject<any>;

  constructor(props: {}) {
    super(props);
    this.gridRef = React.createRef<any>();

    this.copyViaExcelExport = this.copyViaExcelExport.bind(this);
    this.toolbarCopy = this.toolbarCopy.bind(this);
  }

  rowCopy = (e: DataGridTypes.ColumnButtonClickEvent): void => {
    const data = e.row?.data;
    if (!data) return;

    let str = '';

    for (const prop in data) {
      if (data[prop as keyof RowData] !== undefined) {
        str += `${data[prop as keyof RowData]}\t`;
      }
    }

    navigator.clipboard.writeText(str).then(() => {
      notify('Row data copied to clipboard.', 'success', 500);
    }, () => {
      notify('Row data was not copied. There are insufficient permissions for this action.', 'error', 500);
    });
  };

  toolbarCopy = (e: DataGridTypes.ToolbarPreparingEvent): void => {
    if (!e.toolbarOptions.items) {
      e.toolbarOptions.items = [];
    }
    e.toolbarOptions.items.push({
      widget: 'dxButton',
      location: 'after',
      options: {
        hint: 'Copy via Export',
        icon: 'unselectall',
        onClick: this.copyViaExcelExport,
      },
    });
  };

  copyViaExcelExport = (): void => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('dummy');
    let str = '';

    let col = this.grid.getVisibleColumns();
    // keep exportable columns and get the last-most column
    col = col.filter((x: any) => x.dataField !== undefined && x.allowExporting === true);
    const lastColumn = col[col.length - 1].dataField;

    exportDataGrid({
      component: this.grid,
      worksheet: sheet,
      customizeCell(options: any) {
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
            if (gridCell.value) str += `${field}: ${gridCell.value} `;

            if (gridCell.groupSummaryItems !== undefined && gridCell.groupSummaryItems.length >= 1) {
              gridCell.groupSummaryItems.forEach((x: any) => {
                str += ` ${x.name}: ${x.value} `;
              });
            }

            str += '\t';
            break;
          // export groupFooter & totalFooter. Create a separate switch case if you need different actions (ie different spacing)
          case 'groupFooter':
          case 'totalFooter':
            str += gridCell.value === undefined ? '\t' : `${gridCell.totalSummaryItemName}: ${gridCell.value}\t`;
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
        notify('Grid data copied to clipboard.', 'success', 500);
      }, () => {
        notify('Grid data was not copied. There are insufficient permissions for this action.', 'error', 500);
      });
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Export failed:', error);
      notify('Export failed. Please try again.', 'error', 1000);
    });
  };

  get grid(): any {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.gridRef.current?.instance;
  }

  render(): JSX.Element {
    return (
      <DataGrid
        ref={this.gridRef}
        allowColumnResizing={true}
        dataSource={dataSource}
        onToolbarPreparing={this.toolbarCopy}>
        <Column dataField="ID" width={200} />
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="HireDate" />
        <Column dataField="Residence" groupIndex={0} />
        <Column dataField="IsTested" />
        <Column type="buttons">
          <Button name="edit"></Button>
          <Button name="delete"></Button>
          <Button hint="Copy row" icon="copy" onClick={this.rowCopy}></Button>
        </Column>
        <Editing
          mode="popup"
          allowAdding={true}
          allowUpdating={true}
          allowDeleting={true}
          useIcons={true}
        />
        <FilterRow visible={true} />
        <GroupPanel visible={true} />

        <Summary>
          <GroupItem
            column="LastName"
            summaryType="count"
            name="Count"
            alignByColumn={true} />
          <GroupItem
            column="LastName"
            summaryType="count"
            name="Count" />
          <GroupItem
            column="IsTested"
            summaryType="count"
            showInGroupFooter={true}
            name="Count"
            alignByColumn={true} />
          <TotalItem
            column="ID"
            summaryType="count"
            displayFormat="No. of employees: {0}"
            name="No. of employees" />
          <TotalItem
            column="HireDate"
            summaryType="count"
            name="Dates" />
        </Summary>
      </DataGrid>
    );
  }
}

export default App;
