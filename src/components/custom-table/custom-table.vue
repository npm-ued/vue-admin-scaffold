<template>
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
export default defineComponent({
  name: 'customTable'
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
