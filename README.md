<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/304642062/20.1.8%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T941814)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# DataGrid for DevExtreme - How to copy data to Excel

This example demonstrates how to copy DataGrid rows into the clipboard for pasting in Excel.

The example implements two different copy actions:

**1. Copy row.** The command column contains the additional "Copy row" button. Once clicked, the row data will be copied into the clipboard with the appropriate escape characters for Excel.

**2. Copy via Export.**  The [onToolbarPreparing](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onToolbarPreparing) event creates the "Copy via Export" button. Both [exportDataGrid(options)](https://js.devexpress.com/Documentation/ApiReference/Common/Utils/excelExporter/#exportDataGridoptions) and [customizeCell](https://js.devexpress.com/Documentation/ApiReference/Common/Object_Structures/ExportDataGridProps/#customizeCell) are used to access the processed data (group, summary, sort, filter, etc.). The data is aggregated into the clipboard with appropriate escape characters for Excel. This method allows you to achieve similar results with the [DataGrid's Export to ExcelJS](https://js.devexpress.com/Documentation/Guide/Widgets/DataGrid/Getting_Started_with_DataGrid/#Export_Data_to_Excel).

You can easily modify the example to achieve different tasks. For example, copy values from a certain column only.

## Files to Review

- **jQuery**
    - [index.js](jQuery/index.js)
- **Angular**
    - [app.component.html](Angular/src/app/app.component.html)
    - [app.component.ts](Angular/src/app/app.component.ts)
- **Vue**
    - [App.vue](Vue/src/App.vue)
- **React**
    - [App.js](React/src/App.js)
- **NetCore**    
    - [Readme.md](ASP.NET/README.md)

## Documentation

- [DataGrid - Export Data](https://js.devexpress.com/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/#Export_Data)
- [DataGrid.export](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/)

## More Examples

- [DataGrid - Export to Excel - Overview](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSOverview/)
- [Data - Export to Excel - Cell Customization](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSCellCustomization/jQuery/Light/)