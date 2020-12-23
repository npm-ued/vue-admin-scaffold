import { FilterModel, FormItem, FilterReturn } from '../custom-list';
import { reactive } from 'vue';

/**
 * 根据筛选字段定义筛选模型
 * @param {Array} formItems 筛选字段配置
 */
function initFilterModel(
  formItems: FormItem[],
  filter: FilterModel,
  loadData?: Function
): FilterReturn {
  // 通过传递的filterModel合并配置
  const filterObj: FilterModel = Object.assign({}, filter);
  // 根据筛选字段完善筛选模型
  formItems.forEach((item) => {
    const { model } = item;
    const exceptionType = ['button'];
    if (!exceptionType.includes(item?.type as string)) {
      filterObj[model] = undefined; // 默认为空
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
      // 按筛选条件查询数据
      loadData && loadData(filterInit);
    };
  })(filterModel);

  // 根据条件查询
  const query = ((filterInit: FilterModel) => {
    return function (): void {
      loadData && loadData(filterInit);
    };
  })(filterModel);

  return { filterModel, resetForm, query };
}

export default initFilterModel;
