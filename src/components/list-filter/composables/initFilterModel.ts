import { FilterModel, FormItem } from '../list-filter';
import { reactive } from 'vue';

interface FilterReturn {
  filterModel: FilterModel;
  resetForm: Function;
}

/**
 * 根据筛选字段定义筛选模型
 * @param {Array} formItems 筛选字段配置
 */
function initFilterModel(
  formItems: FormItem[],
  filter: FilterModel
): FilterReturn {
  // 通过传递的filterModel合并配置
  const filterObj: FilterModel = Object.assign({}, filter);
  // 根据筛选字段完善筛选模型
  formItems.forEach((item) => {
    const { model } = item;
    const exceptionType = ['button'];
    if (!exceptionType.includes(item?.type as string)) {
      filterObj[model] = ''; // 默认为空
    }
  });
  const filterModel = reactive(filterObj);
  // 将赋值后的filter Model 重置为init时刻的状态
  const resetForm = ((filterInit: FilterModel) => {
    const filterInitModel = Object.assign({}, filterInit);
    return function (): void {
      // 重置各种属性
      for (const key in filterInit) {
        filterInit[key] = filterInitModel[key];
      }
    };
  })(filterModel);

  return { filterModel, resetForm };
}

export default initFilterModel;
