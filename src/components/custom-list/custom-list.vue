<template>
  <div>
    <listFilter
      :filter="filterModel"
      :fields="fields"
      :resetForm="resetForm"
      :query="query"
    />
    <slot name="listOperate"></slot>
    <el-table
      :data="dataArr"
      stripe
      border
      :max-height="maxHeight"
      style="width: 100%"
      v-loading="tableLoading"
    >
      <template v-for="(item, index) in fColumns" :key="index">
        <el-table-column
          :prop="item.key"
          :label="item.title"
          :width="item.width"
        />
      </template>
    </el-table>
    <div class="pageWrap">
      <el-pagination
        @size-change="changeSize"
        @current-change="changePage"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import ListFilter from '../list-filter';
import getTableData from './composables/getTableInfo';
import getPage from './composables/getPage';
import initFields from './composables/initFields';
import initFilterModel from './composables/initFilterModel';
import { FormItem, FilterModel } from './custom-list';
import { mount } from '@vue/test-utils';

export default defineComponent({
  name: 'customList',
  components: {
    ListFilter
  },
  data() {
    return {
      selection: [], // 已选择项
      selectRow: null // 当前选择行
    };
  },
  emits: ['query'],
  props: {
    // 列配置
    columns: {
      type: Array,
      required: true
    },
    ajaxType: {
      // ajax 的类型
      type: String,
      default: 'get'
    },
    // 数据
    dataList: {
      type: Array
    },
    // 筛选字段
    filterItems: {
      type: Array
    },
    // 列表ajax url
    listUrl: {
      type: String
    },
    // 最大高度
    maxHeight: {
      type: Number,
      default: 540
    },
    // 筛选对象
    filter: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup(props, { emit }) {
    const fColumns: any = ref(props.columns); // 初始化列的配置参数
    const filterItems = props.filterItems as Array<FormItem>;
    const filter = props.filter as FilterModel;
    const { fields } = initFields(filterItems);
    const { dataArr, totalCount, tableLoading, loadData } = getTableData(emit);
    const { filterModel, resetForm, query } = initFilterModel(
      filterItems,
      filter,
      loadData
    );
    const {
      currentPage,
      pageSize,
      pageSizes,
      changePage,
      changeSize
    } = getPage(loadData, filterModel);
    // on mounted call
    onMounted(loadData);
    return {
      fColumns,
      totalCount,
      pageSize,
      pageSizes,
      dataArr,
      currentPage,
      changePage,
      changeSize,
      filterModel,
      fields,
      resetForm,
      query,
      tableLoading
    };
  }
});
</script>
<style scoped>
.pageWrap {
  padding: 5px;
  height: 32px;
}
.el-pagination {
  float: right;
}
</style>
