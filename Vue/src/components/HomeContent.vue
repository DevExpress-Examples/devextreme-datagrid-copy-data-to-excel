<template>
  <div>
    <DxDataGrid
      ref="gridRef"
      :data-source="dataSource"
      :allow-column-resizing="true"
      @toolbar-preparing="toolbarCopy"
    >
      <DxColumn
        data-field="ID"
        :width="200"
      />
      <DxColumn data-field="FirstName"/>
      <DxColumn data-field="LastName"/>
      <DxColumn data-field="HireDate"/>
      <DxColumn
        data-field="Residence"
        :group-index="0"
      />
      <DxColumn data-field="IsTested"/>
      <DxColumn
        type="buttons"
        :buttons="buttons"
      />

      <DxEditing
        mode="popup"
        :allow-updating="true"
        :allow-deleting="true"
        :allow-adding="true"
        :use-icons="true"
      />
      <DxGroupPanel :visible="true"/>
      <DxFilterRow :visible="true"/>
      <DxSummary>
        <DxGroupItem
          column="LastName"
          summary-type="count"
          name="Count"
          :align-by-column="true"
        />
        <DxGroupItem
          column="LastName"
          summary-type="count"
          name="Count"
        />
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
          display-format="No. of employees: {0}"
          name="No. of employees"
        />
        <DxTotalItem
          column="HireDate"
          summary-type="count"
          name="Dates"
        />
      </DxSummary>
    </DxDataGrid>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import DxDataGrid, {
  DxEditing,
  DxColumn,
  DxGroupPanel,
  DxGroupItem,
  DxTotalItem,
  DxFilterRow,
  DxSummary,
  type DxDataGridTypes,
} from 'devextreme-vue/data-grid';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { exportDataGrid } from 'devextreme/excel_exporter';
import notify from 'devextreme/ui/notify';
import * as ExcelJS from 'exceljs';
import { data, type EmployeeData } from '../data';

const gridRef = ref<DxDataGrid | null>(null);

const dataSource = new DataSource({
  store: new ArrayStore({
    data: data,
    key: 'ID',
  }),
});

function rowCopy(e: DxDataGridTypes.ColumnButtonClickEvent): void {
  const rowData: EmployeeData = e.row?.data;
  if (!rowData) return;
  let str = '';

  for (const prop in rowData) {
    if (rowData[prop as keyof EmployeeData] !== undefined) {
      str += `${rowData[prop as keyof EmployeeData]}\t`;
    }
  }

  navigator.clipboard.writeText(str).then(() => {
    notify('Row data copied to clipboard.', 'success', 500);
  }, () => {
    notify('Row data was not copied. There are insufficient permissions for this action.', 'error', 500);
  });
}

const buttons = [
  'edit' as const,
  'delete' as const,
  {
    hint: 'Copy row',
    icon: 'copy',
    onClick: rowCopy,
  } as const,
];

const grid = computed(() => {
  return gridRef.value?.instance;
});

function toolbarCopy(e: DxDataGridTypes.ToolbarPreparingEvent): void {
  if (!e.toolbarOptions.items) {
    e.toolbarOptions.items = [];
  }
  e.toolbarOptions.items.push({
    widget: 'dxButton',
    location: 'after',
    options: {
      hint: 'Copy via Export',
      icon: 'unselectall',
      onClick: copyViaExcelExport
    }
  });
}

function copyViaExcelExport(): void {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('dummy');
  let str = '';

  const gridInstance = grid.value;
  if (!gridInstance) return;

  let col = gridInstance.getVisibleColumns();
  // keep exportable columns and get the last-most column
  col = col.filter((x: any) => x.dataField !== undefined && x.allowExporting === true);
  const lastColumn = col[col.length - 1].dataField;

  exportDataGrid({
    component: gridInstance,
    worksheet: sheet,
    customizeCell: function(options: { gridCell?: any; excelCell?: any }) {
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
          if (gridCell.value)
          { str += `${field}: ${gridCell.value} `; }

          if (gridCell.groupSummaryItems !== undefined && gridCell.groupSummaryItems.length >= 1) {
            gridCell.groupSummaryItems.forEach((x: any) => {
              str += ` ${x.name}: ${x.value} `;
            });
          }

          str += '\t';
          break;
        // export groupFooter & totalFooter. Create a separate switch case if you need
        // different actions (ie different spacing)
        case 'groupFooter':
        case 'totalFooter':
          str += (gridCell.value === undefined ? '\t' : `${gridCell.totalSummaryItemName}: ${gridCell.value}\t`);
          break;
        default:
          console.log(
            'Unknown row type detected. Please check possible DataGrid breaking changes regarding rowType',
            gridCell
          );
          break;
      }

      if (field === lastColumn) {
        str += '\r\n';
      }
    }
  }).then(() => {
    console.log(str);
    navigator.clipboard.writeText(str).then(() => {
      notify('Grid data copied to clipboard.', 'success', 500);
    }, () => {
      notify('Grid data was not copied. There are insufficient permissions for this action.', 'error', 500);
    });
  }).catch((error) => {
    console.error('Export failed:', error);
    notify('Export failed. Please try again.', 'error', 1000);
  });
}
</script>

<style>
.main {
  padding: 20px;
}
</style>
