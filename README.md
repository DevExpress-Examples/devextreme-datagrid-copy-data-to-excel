# DataGrid - Copy to Excel
<!-- run online -->
**[[Run Online]](https://codecentral.devexpress.com/304642062/)**
<!-- run online end -->

This example demonstrates how to copy DataGrid rows into the clipboard for pasting in Excel.

The example implements two different copy actions:

**1. Copy row.** The command column contains the additional "Copy row" button. Once clicked, the row data will be copied into the clipboard with the appropriate escape characters for Excel.

**2. Copy via Export.**  The [onToolbarPreparing](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onToolbarPreparing) event creates the "Copy via Export" button. Both [exportDataGrid(options)](https://js.devexpress.com/Documentation/ApiReference/Common/Utils/excelExporter/#exportDataGridoptions) and [customizeCell](https://js.devexpress.com/Documentation/ApiReference/Common/Object_Structures/ExportDataGridProps/#customizeCell) are used to access the processed data (group, summary, sort, filter, etc.). The data is aggregated into the clipboard with appropriate escape characters for Excel. This method allows you to achieve similar results with the [DataGrid's Export to ExcelJS](https://js.devexpress.com/Documentation/Guide/Widgets/DataGrid/Getting_Started_with_DataGrid/#Export_Data_to_Excel).

You can easily modify the example to achieve different tasks. For example, copy values from a certain column only.
