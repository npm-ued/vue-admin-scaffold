<template>
  <custom-list :columns="columns" :filterItems="formItemArr" @query="query">
    <template v-slot:listOperate>
      <div class="pt10 pb10">
        <el-button type="primary" icon="el-icon-plus">Add</el-button>
      </div>
    </template>
  </custom-list>
</template>
<script lang="ts">
import customList from '@/components/custom-list/custom-list.vue';
import { defineComponent } from 'vue';
import getColumns from './composables/getColumns';
import getUserList from './composables/getUserList';
import getFormItem from './composables/getFormItem';

export default defineComponent({
  components: { customList },
  name: 'userSetting',
  setup() {
    const columns = getColumns();
    const formItemArr = getFormItem();
    const { query } = getUserList();
    return { columns, formItemArr, query };
  }
});
</script>
