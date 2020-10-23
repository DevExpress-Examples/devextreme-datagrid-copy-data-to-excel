import { Component, ViewChild } from '@angular/core';


import { DxDataGridComponent } from "devextreme-angular";
import ArrayStore from "devextreme/data/array_store";
import notify from "devextreme/ui/notify";
import { exportDataGrid } from 'devextreme/excel_exporter';
import * as ExcelJS from 'exceljs';
import * as data from "../data";
//import saveAs from 'file-saver';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    rowCopy(e: any) {
        let data = e.row.data;
        let str = "";

        for (let prop in data) {
            if (data.hasOwnProperty(prop)) {
                str += data[prop] + "\t";
            }
        }

        navigator.clipboard.writeText(str).then(() => {
            notify("Row data copied to clipboard.", "success", 500);
        }, () => {
            notify("Row data was not copied. There are insufficient permissions for this action.", "error", 500);
        });
    }

    toolbarCopy(e: any) {
        let toolbarItems = e.toolbarOptions.items;

        toolbarItems.push({
            widget: "dxButton",
            location: "after",
            options: {
                hint: "Copy via Export",
                icon: "unselectall",
                onClick: this.copyViaExcelExport
            }
        });
    }

    copyViaExcelExport(e: any) {
        let workbook = new ExcelJS.Workbook();
        let sheet = workbook.addWorksheet("dummy");
        let str = "";

        let col = this.grid.instance.getVisibleColumns();
        // keep exportable columns and get the last-most column
        col = col.filter(x => x.dataField !== undefined && x.allowExporting === true);
        let lastColumn = col[col.length - 1].dataField;

        exportDataGrid({
            component: this.grid.instance,
            worksheet: sheet,
            customizeCell: function (options) {
                let { gridCell, excelCell } = options;
                let field = gridCell.column.dataField;

                switch (gridCell.rowType) {
                    // export header row
                    case "header":
                        str += gridCell.column.caption + "\t";
                        break;
                    // export data row
                    case "data":
                        str += gridCell.value + "\t";
                        break;
                    // export group row
                    case "group":
                        if (gridCell.value)
                            str += (field + ": " + gridCell.value + " ");

                        if (gridCell.groupSummaryItems !== undefined && gridCell.groupSummaryItems.length >= 1) {
                            gridCell.groupSummaryItems.forEach(x => {
                                str += " " + (x.name + ": " + x.value + " ");
                            });
                        }

                        str += "\t";

                        break;
                    // export groupFooter & totalFooter. Create a separate switch case if you need different actions (ie different spacing)
                    case "groupFooter":
                    case "totalFooter":
                        str += ((gridCell.value === undefined) ? "\t" : gridCell.totalSummaryItemName + ": " + gridCell.value + "\t");

                        break;
                    default:
                        console.log("Unknown row type detected. Please check possible DataGrid breaking changes regarding rowType", gridCell);

                        break;
                }

                if (field === lastColumn) {
                    str += "\r\n";
                }
            }
        }).then(() => {
            console.log(str);
            navigator.clipboard.writeText(str).then(() => {
                notify("Grid data copied to clipboard.", "success", 500);
            }, () => {
                notify("Grid data was not copied. There are insufficient permissions for this action.", "error", 500);
            })
        })
    }

    @ViewChild("grid", { static: false }) grid: DxDataGridComponent

    constructor() {
        this.copyViaExcelExport = this.copyViaExcelExport.bind(this);
        //this.data = data.data;

        this.dataSource = {
            store: new ArrayStore({
                data: data.data,
                key: "ID"
            })
        }
    }

    dataSource;
}
