<template>
  <div class="filterOutBox" v-if="formItems.length">
    <template v-for="(row, index) in fields" :key="index">
      <el-row :gutter="20">
        <el-col
          v-for="(item, indexKey) in row"
          :span="item.span"
          :key="indexKey"
        >
          <div class="grid-content filterInputItem">
            <el-input
              v-if="item.type === 'input'"
              v-model="filterModel[item.model]"
              :placeholder="item.label"
            />
            <el-date-picker
              v-if="item.type === 'date' || item.type === 'datetime'"
              v-model="filterModel[item.model]"
              :type="item.type"
              :placeholder="item.label"
            />
            <div v-if="item.type === 'button'">
              <!-- 重置按钮 -->
              <el-button @click="resetForm">{{ $t('Common.Reset') }}</el-button>
              <!-- 其他按钮 -->
              <el-button
                v-for="(buttonItem, indexBtn) in item.buttonArr"
                :key="indexBtn"
                :type="buttonItem.type"
              >
                {{ buttonItem.message }}
              </el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import initFields from './composables/initFields';
import initFilterModel from './composables/initFilterModel';
import { ListFilterProps, FormItem, FilterModel } from './list-filter';

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
  setup(props: ListFilterProps) {
    const buttonStatus = ref(false); // 按钮切换
    const changeStatus = () => {
      buttonStatus.value = !buttonStatus.value;
    };
    const formItems = props.formItems as Array<FormItem>;
    const filter = props.filter as FilterModel;
    const { fields } = initFields(formItems);
    const { filterModel, resetForm } = initFilterModel(formItems, filter);
    return { changeStatus, fields, filterModel, resetForm };
  }
});
</script>
<style scoped>
.filterFormShow {
  height: 55px;
}
.filterInputItem {
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 8px;
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
