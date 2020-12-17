<template>
  <custom-list
    :columns="columns"
    :dataList="tableData"
    :filterItems="formItemArr"
  />
</template>
<script lang="ts">
import customList from '@/components/custom-list/custom-list.vue';
import { defineComponent, ref } from 'vue';
import getUsers from './composables/getUsers';
import getColumns from './composables/getColumns';
import data from './composables/data';

export default defineComponent({
  components: { customList },
  name: 'userSetting',
  setup(props) {
    const list = getUsers();
    const columns = getColumns();
    const tableData = data;
    const formItemArr = [
      // 手机号
      {
        label: '手机号',
        model: 'mobile'
      },
      // 用户Uname
      {
        label: 'Uname',
        model: 'uname'
      },
      // 按钮
      {
        type: 'button',
        span: 16,
        buttonArr: [
          {
            message: '查询',
            type: 'primary',
            fun: 'searchTableInfo'
          }
        ]
      }
    ];
    return { list, columns, tableData, formItemArr };
  }
});
</script>
