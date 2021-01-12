import { ref } from 'vue';
import { FilterModel } from '../custom-list';

function getPage(loadData: Function, filterModel: FilterModel) {
  const currentPage = ref(1); // 当前页码
  const pageSizes = [10, 20, 30, 40]; // 每页条数切换
  const pageSize = ref(10); // 每页条数
  /**
   * 页码切换回调
   * @param pageNum 当前页码
   */
  const changePage = (pageNum: number) => {
    currentPage.value = pageNum;
    const size = pageSize.value;
    const dataConfig = Object.assign({ pageSize: size, pageNum }, filterModel);
    loadData(dataConfig);
  };
  /**
   * 分页条数切换
   * @param sizes 每页条数
   */
  const changeSize = (sizes: number) => {
    pageSize.value = sizes;
    const pageNum = currentPage.value;
    const dataConfig = Object.assign({ pageSize: sizes, pageNum }, filterModel);
    loadData(dataConfig);
  };

  return { currentPage, pageSize, pageSizes, changePage, changeSize };
}
export default getPage;
