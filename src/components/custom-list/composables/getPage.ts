import { ref } from 'vue';

function getPage(loadData: Function) {
  const currentPage = ref(1); // 当前页码
  const pageSizes = [10, 20, 30, 40]; // 每页条数切换
  const pageSize = ref(10); // 每页条数
  /**
   * 页码切换回调
   * @param pageNum 当前页码
   */
  const changePage = (pageNum: number) => {
    console.log(`当前页：${pageNum} `);
    currentPage.value = pageNum;
    loadData(currentPage, pageSize);
  };
  /**
   * 分页条数切换
   * @param sizes 每页条数
   */
  const changeSize = (sizes: number) => {
    console.log(`每页：${sizes} 条`);
    pageSize.value = sizes;
    loadData(currentPage, pageSize);
  };

  return { currentPage, pageSize, pageSizes, changePage, changeSize };
}
export default getPage;
