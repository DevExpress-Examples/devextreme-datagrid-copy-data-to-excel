$(function () {
    function rowCopy(e) {
        let data = e.row.data;
        let str = "";

        for (let prop in data) {
            if (data.hasOwnProperty(prop)) {
                str += data[prop] + "\t";
            }
        }

        navigator.clipboard.writeText(str).then(() => {
            DevExpress.ui.notify("Row data copied to clipboard.", "success", 500);
        }, () => {
            DevExpress.ui.notify("Row data was not copied. There are insufficient permissions for this action.", "error", 500);
        });
    }

    function toolbarCopy(e) {
        let toolbarItems = e.toolbarOptions.items;

        toolbarItems.push({
            widget: "dxButton",
            location: "after",
            options: {
                hint: "Copy via Export",
                icon: "unselectall",
                onClick: copyViaExcelExport
            }
        });
    }

    function copyViaExcelExport(e) {
        let workbook = new ExcelJS.Workbook();
        let sheet = workbook.addWorksheet("dummy");
        let str = "";

        let col = grid.getVisibleColumns();
        // keep exportable columns and get the last-most column
        col = col.filter((x) => x.dataField !== undefined && x.allowExporting === true);
        let lastColumn = col[col.length - 1].dataField;

        DevExpress.excelExporter.exportDataGrid({
            component: grid,
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
                DevExpress.ui.notify("Grid data copied to clipboard.", "success", 500);
            }, () => {
                DevExpress.ui.notify("Grid data was not copied. There are insufficient permissions for this action.", "error", 500);
            });
        });
    }

    var grid = $("#grid").dxDataGrid({
        dataSource: {
            store: {
                data: data,
                type: "array",
                key: "ID"
            }
        },
        editing: {
            mode: "popup",
            allowAdding: true,
            allowUpdating: true,
            allowDeleting: true,
            useIcons: true
        },
        allowColumnResizing: true,
        onToolbarPreparing: toolbarCopy,
        groupPanel: {
            visible: true
        },
        filterRow: {
            visible: true
        },
        summary: {
            groupItems: [{
                column: "LastName",
                summaryType: "count",
                name: "Count",
                alignByColumn: true
            }, {
                column: "LastName",
                summaryType: "count",
                name: "Count"
            }, {
                column: "IsTested",
                summaryType: "count",
                showInGroupFooter: true,
                name: "Count",
                alignByColumn: true,
            }],
            totalItems: [{
                column: "ID",
                summaryType: "count",
                displayFormat: "No. of employees: {0}",
                name: "No. of employees"
            }, {
                column: "HireDate",
                summaryType: "count",
                name: "Dates"
            }]
        },
        columns: [{
            dataField: "ID",
            width: "200"
        }, "FirstName", "LastName", "HireDate", {
            dataField: "Residence",
            groupIndex: 0
        }, "IsTested", {
            type: "buttons",
            buttons: ["edit", "delete", {
                hint: "Copy row",
                icon: "copy",
                onClick: rowCopy
            }]
        }]
    }).dxDataGrid("instance");

    $("#button").dxButton({
        text: "Test",
        onClick: () => {}
    });
});