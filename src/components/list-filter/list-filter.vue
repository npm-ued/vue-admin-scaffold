<template>
  <div class="filterOutBox" v-if="formItems.length">
    <template v-for="(row, index) in fields" :key="index">
      <el-row :gutter="20">
        <el-col
          v-for="(item, indexKey) in row"
          :span="item.span"
          :key="indexKey"
        >
          <div class="grid-content">
            <el-input
              :placeholder="item.label"
              :value="filter[item.key]"
              clearable
            />
          </div>
        </el-col>
      </el-row>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import initFields from './composables/initFields';
export default defineComponent({
  name: 'listFilter',
  props: {
    // 筛选项数组
    formItems: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // 筛选对象
    filter: {
      type: Object,
      default: () => {
        return {};
      }
    },
    // 每个筛选项默认的栅格宽度，整个一行24栅格
    defaultSpan: {
      type: Number,
      default: 4
    }
  },
  setup(props) {
    const buttonStatus = ref(false); // 按钮切换
    const changeStatus = () => {
      buttonStatus.value = !buttonStatus.value;
    };
    const { fields } = initFields(props.formItems);
    console.log(fields);
    return { changeStatus, fields };
  }
});
</script>
<style scoped>
.filterFormShow {
  height: 55px;
}
.ivu-form-item {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 4px;
}
.contentStatus {
  padding: 10px 40px;
}
.filterFormBox .ivu-col {
  transition: width 0.2s ease-in-out;
}
.filterOutBox {
  box-shadow: 0 0 10px rgba(57, 105, 235, 0.2);
  padding: 15px 0 10px;
  margin-bottom: 10px;
  background: #fff;
}
.filterBtn {
  padding: 0 5px;
  margin-top: 5px;
}
.filterBtn a {
  display: block;
  width: 100%;
  height: 30px;
  background: #f7f8fb;
  line-height: 30px;
  text-align: center;
}
@media only screen and (max-width: 675px) {
  .contentStatus {
    padding: 0;
  }
  .ivu-form-item {
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 16px;
  }
}
.filterButton {
  margin: 5px 0 0 5px;
}
.fliterRight {
  float: right;
}
.filterTextRight {
  text-align: right;
  margin-top: -4px;
}
.fullWidth {
  width: 100%;
}
</style>
