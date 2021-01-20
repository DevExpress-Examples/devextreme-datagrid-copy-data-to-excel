import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import './App.css';
import { data } from "./data";

import DataGrid, { Editing, Column, GroupPanel, GroupItem, TotalItem, FilterRow, Summary, Button } from "devextreme-react/data-grid";
import { exportDataGrid } from "devextreme/excel_exporter";
import notify from "devextreme/ui/notify";
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

import * as ExcelJS from "exceljs";

const dataSource = new DataSource({
    store: new ArrayStore({
        data: data,
        key: "ID"
    })
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.gridRef = React.createRef();

        this.copyViaExcelExport = this.copyViaExcelExport.bind(this);
        this.toolbarCopy = this.toolbarCopy.bind(this);
    }

    rowCopy(e) {
        let data = e.row.data;
        let str = "";

        for (let prop in data) {
            if (data[prop] !== undefined) {
                str += `${data[prop]}\t`;
            }
        }

        navigator.clipboard.writeText(str).then(() => {
            notify("Row data copied to clipboard.", "success", 500);
        }, () => {
            notify("Row data was not copied. There are insufficient permissions for this action.", "error", 500);
        });
    }

    toolbarCopy(e) {
        e.toolbarOptions.items.push({
            widget: "dxButton",
            location: "after",
            options: {
                hint: "Copy via Export",
                icon: "unselectall",
                onClick: this.copyViaExcelExport
            }
        });
    }

    copyViaExcelExport(e) {
        let workbook = new ExcelJS.Workbook();
        let sheet = workbook.addWorksheet("dummy");
        let str = "";

        let col = this.grid.getVisibleColumns();
        // keep exportable columns and get the last-most column
        col = col.filter((x) => x.dataField !== undefined && x.allowExporting === true);
        let lastColumn = col[col.length - 1].dataField;

        exportDataGrid({
            component: this.grid,
            worksheet: sheet,
            customizeCell: function (options) {
                let { gridCell } = options;
                let field = gridCell.column.dataField;

                switch (gridCell.rowType) {
                    // export header row
                    case "header":
                        str += `${gridCell.column.caption}\t`;
                        break;
                    // export data row
                    case "data":
                        str += `${gridCell.value}\t`;
                        break;
                    // export group row
                    case "group":
                        if (gridCell.value)
                            str += `${field}: ${gridCell.value} `;

                        if (gridCell.groupSummaryItems !== undefined && gridCell.groupSummaryItems.length >= 1) {
                            gridCell.groupSummaryItems.forEach(x => {
                                str += ` ${x.name}: ${x.value} `;
                            });
                        }

                        str += `\t`;

                        break;
                    // export groupFooter & totalFooter. Create a separate switch case if you need different actions (ie different spacing)
                    case "groupFooter":
                    case "totalFooter":
                        str += (gridCell.value === undefined ? `\t` : `${gridCell.totalSummaryItemName}: ${gridCell.value}\t`);

                        break;
                    default:
                        console.log("Unknown row type detected. Please check possible DataGrid breaking changes regarding rowType", gridCell);

                        break;
                }

                if (field === lastColumn) {
                    str += `\r\n`;
                }
            }
        }).then(() => {
            console.log(str);
            navigator.clipboard.writeText(str).then(() => {
                notify("Grid data copied to clipboard.", "success", 500);
            }, () => {
                notify("Grid data was not copied. There are insufficient permissions for this action.", "error", 500);
            });
        });
    }

    get grid() {
        return this.gridRef.current.instance;
    }

    render() {
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
                        displayFormat={'No. of employees: {0}'}
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
