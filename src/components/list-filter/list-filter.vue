<template>
  <div class="filterOutBox" v-if="fields.length">
    <el-row :gutter="10">
      <template v-for="(row, index) in fields" :key="index">
        <template v-for="(item, indexKey) in row" :key="indexKey">
          <el-col
            :span="item.span"
            v-if="
              item.type != 'button' &&
              (filterExpandStatus ||
                (item.span * (indexKey + 1) < 24 && index < 1))
            "
          >
            <div class="grid-content filterInputItem">
              <!-- 文本输入框开始 -->
              <el-input
                v-if="item.type === 'input'"
                v-model="filterModel[item.model]"
                :placeholder="item.label"
              />
              <!-- 文本输入框结束 -->
              <!-- 时间选择器开始 -->
              <el-date-picker
                v-if="item.type === 'date' || item.type === 'datetime'"
                v-model="filterModel[item.model]"
                :type="item.type"
                :placeholder="item.label"
                :shortcuts="item.shortcuts"
              />
              <!-- 时间选择器结束 -->
              <!-- select选择开始 -->
              <el-select
                v-if="item.type === 'select'"
                v-model="filterModel[item.model]"
                clearable
                :placeholder="item.label"
              >
                <el-option
                  v-for="itemOption in item.options"
                  :key="itemOption.value"
                  :label="itemOption.name"
                  :value="itemOption.value"
                  :disabled="itemOption.disabled"
                >
                </el-option>
              </el-select>
              <!-- select选择结束 -->
            </div>
          </el-col>
          <el-col
            v-if="item.type === 'button'"
            :span="filterExpandStatus ? item.span : defaultSpan"
          >
            <!-- 按钮开始 -->
            <div class="fliterRight">
              <!-- 重置按钮 -->
              <el-button @click="resetForm">{{ $t('Common.Reset') }}</el-button>
              <el-button @click="query" type="primary">
                {{ $t('Common.Inquire') }}
              </el-button>
              <el-link
                class="filterStatusLink"
                type="primary"
                @click="changeStatus"
                href="javascript:void(0)"
              >
                {{
                  filterExpandStatus
                    ? $t('Common.Collapse')
                    : $t('Common.Expand')
                }}
                <i
                  v-if="filterExpandStatus"
                  class="el-icon--right el-icon-arrow-up"
                ></i>
                <i v-else class="el-icon--right el-icon-arrow-down"></i>
              </el-link>
              <!-- 其他按钮 -->
              <template>
                <el-button
                  v-for="(buttonItem, indexBtn) in item.buttonArr"
                  :key="indexBtn"
                  :type="buttonItem.type"
                >
                  {{ buttonItem.message }}
                </el-button>
              </template>
            </div>
            <!-- 按钮结束 -->
          </el-col>
        </template>
      </template>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue';
import { ListFilterProps } from './list-filter';
interface FilterModel {
  [propName: string]: any;
}
export default defineComponent({
  name: 'listFilter',
  props: {
    // 筛选项数组
    fields: {
      type: Array as () => FilterModel[],
      default: () => {
        return [];
      }
    },
    filter: {
      type: Object as () => FilterModel,
      default: () => {
        return {};
      }
    },
    // 重置
    resetForm: {
      type: Function
    },
    // 查询
    query: {
      type: Function
    },
    // 每个筛选项默认的栅格宽度，整个一行24栅格
    defaultSpan: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      value1: ''
    };
  },
  methods: {
    save() {
      console.log(this.filterModel);
    }
  },
  setup(props) {
    const { filter } = toRefs(props);
    const filterModel = filter;
    const filterExpandStatus = ref(false); // 按钮切换
    const changeStatus = () => {
      filterExpandStatus.value = !filterExpandStatus.value;
    };
    return { changeStatus, filterModel, filterExpandStatus };
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
.filterStatusLink {
  display: inline-block;
  margin: 0 10px;
}
</style>
