<template>
  <DxDataGrid
    :ref="gridRef"
    :data-source="dataSource"
    :allow-column-resizing="true"
    @toolbar-preparing="toolbarCopy"
  >
    <DxColumn data-field="ID" :width="200" />
    <DxColumn data-field="FirstName" />
    <DxColumn data-field="LastName" />
    <DxColumn data-field="HireDate" />
    <DxColumn data-field="Residence" :group-index="0" />
    <DxColumn data-field="IsTested" />
    <DxColumn type="buttons" :buttons="buttons" />

    <DxEditing
      mode="popup"
      :allow-updating="true"
      :allow-deleting="true"
      :allow-adding="true"
      :use-icons="true"
    />
    <DxGroupPanel :visible="true" />
    <DxFilterRow :visible="true" />
    <DxSummary>
      <DxGroupItem
        column="LastName"
        summary-type="count"
        name="Count"
        :align-by-column="true"
      />
      <DxGroupItem column="LastName" summary-type="count" name="Count" />
      <DxGroupItem
        column="IsTested"
        summary-type="count"
        :show-in-group-footer="true"
        name="Count"
        :align-by-column="true"
      />
      <DxTotalItem
        column="ID"
        summary-type="count"
        display-format="No. of employees: {0}'"
        name="No. of employees"
      />
      <DxTotalItem column="HireDate" summary-type="count" name="Dates" />
    </DxSummary>
  </DxDataGrid>
</template>

<script>
import DxDataGrid, {
  DxEditing,
  DxColumn,
  DxGroupPanel,
  DxGroupItem,
  DxTotalItem,
  DxFilterRow,
  DxSummary,
} from "devextreme-vue/data-grid";
import DataSource from "devextreme/data/data_source";
import ArrayStore from "devextreme/data/array_store";
import { exportDataGrid } from "devextreme/excel_exporter";
import notify from "devextreme/ui/notify";
import * as ExcelJS from "exceljs";
import { data } from "./data";

const gridRef = "gridRef";

const dataSource = new DataSource({
  store: new ArrayStore({
    data: data,
    key: "ID",
  }),
});

export default {
  name: "App",
  components: {
    DxDataGrid,
    DxEditing,
    DxColumn,
    DxGroupPanel,
    DxGroupItem,
    DxTotalItem,
    DxFilterRow,
    DxSummary,
  },
  data() {
    return {
      dataSource: dataSource,
      gridRef,
      buttons: [
        "edit",
        "delete",
        {
          hint: "Copy row",
          icon: "copy",
          onClick: this.rowCopy,
        },
      ],
    };
  },
  methods: {
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
    },
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
    },
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
  },
  computed: {
    grid: function () {
      return this.$refs[gridRef].instance;
    },
  },
};
</script>

<style>
</style>
