<template>
  <listFilter :formItems="filterItems" />
  <el-table
    :data="dataList"
    stripe
    border
    :max-height="maxHeight"
    style="width: 100%"
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
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import ListFilter from '../list-filter';
export default defineComponent({
  name: 'customList',
  components: {
    ListFilter
  },
  props: {
    // 列配置
    columns: {
      type: Array,
      required: true
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
    maxHeight: {
      type: Number,
      default: 540
    }
  },
  setup(props) {
    const fColumns = ref(props.columns);
    const total = 1000;
    const currentPage = 1;
    return { fColumns, total, currentPage };
  },
  methods: {
    handleSizeChange(sizes: any) {
      console.log(`每页：${sizes} 条`);
    },
    handleCurrentChange(val: any) {
      console.log(`当前页：${val} `);
    }
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
