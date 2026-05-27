import { Component, ViewChild } from '@angular/core';
import {DxDataGridComponent, DxDataGridTypes, DxDataGridModule} from 'devextreme-angular/ui/data-grid';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import { exportDataGrid } from 'devextreme/excel_exporter';
import * as ExcelJS from 'exceljs';
import { data, type EmployeeData } from '../data';

@Component({
  selector: 'app-root',
  imports: [DxDataGridModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('grid', { static: false }) grid!: DxDataGridComponent;

  dataSource: DataSource<EmployeeData, string>;

  constructor() {
    this.dataSource = new DataSource({
      store: new ArrayStore({
        data,
        key: 'ID',
      }),
    });
  }

  rowCopy = (e: any): void => {
    // Cast to DevExtreme event type
    const event = e as DxDataGridTypes.ColumnButtonClickEvent;
    const rowData: EmployeeData | undefined = event.row?.data;
    if (!rowData) return;

    let str = '';

    // Use Object.entries for better type safety
    Object.entries(rowData).forEach(([, value]) => {
      if (value !== undefined) {
        str += `${value}\t`;
      }
    });

    navigator.clipboard.writeText(str).then(() => {
      notify('Row data copied to clipboard.', 'success', 500);
    }, () => {
      notify('Row data was not copied. There are insufficient permissions for this action.', 'error', 500);
    });
  };

  toolbarCopy = (e: any): void => {
    // Cast to DevExtreme event type
    const event = e as DxDataGridTypes.ToolbarPreparingEvent;
    if (!event.toolbarOptions.items) {
      event.toolbarOptions.items = [];
    }

    event.toolbarOptions.items.push({
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

    const gridInstance = this.grid.instance;
    let col = gridInstance.getVisibleColumns();

    // Filter exportable columns and get the last column
    col = col.filter((x: any) => x.dataField !== undefined && x.allowExporting === true);
    const lastColumn = col[col.length - 1].dataField;

    exportDataGrid({
      component: gridInstance,
      worksheet: sheet,
      customizeCell: (options: { gridCell?: any; excelCell?: any }): void => {
        const { gridCell } = options;
        if (!gridCell) return;

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
            if (gridCell.value) {
              str += `${field}: ${gridCell.value} `;
            }

            if (gridCell.groupSummaryItems && gridCell.groupSummaryItems.length >= 1) {
              gridCell.groupSummaryItems.forEach((x: any) => {
                str += ` ${x.name}: ${x.value} `;
              });
            }

            str += '\t';
            break;
          // export groupFooter & totalFooter
          case 'groupFooter':
          case 'totalFooter':
            str += gridCell.value === undefined ? '\t'
              : `${gridCell.totalSummaryItemName}: ${gridCell.value}\t`;
            break;
          default:
            // eslint-disable-next-line no-console
            console.warn('Unknown row type detected:', gridCell.rowType, gridCell);
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
}
