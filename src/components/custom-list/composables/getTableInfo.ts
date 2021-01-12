import { ref } from 'vue';
interface DataItem {
  pageSize: number;
  pageNum: number;
  [propName: string]: any;
}

function getTableData(emit: any) {
  const dataArr = ref<any>([]);
  const currentPage = ref(1);
  const totalCount = ref(0);
  const tableLoading = ref(false);
  /**
   * 加载数据
   * @param pageNum 当前页码
   * @param pageSize 每页条数
   */
  const loadData = (data?: DataItem) => {
    // 基础分页配置
    const page = {
      pageSize: 10,
      pageNum: 1
    };
    const dataConfig = Object.assign(page, data);
    tableLoading.value = true;
    const listDataConfig = {
      data: dataConfig, // 请求参数
      // 完成回调
      complete(res: any, type = 'success') {
        tableLoading.value = false;
        if (type == 'success') {
          const { data } = res;
          const { list, total } = data?.data;
          dataArr.value = list;
          totalCount.value = total;
        }
      }
    };
    emit('query', listDataConfig);
  };
  return { dataArr, totalCount, tableLoading, currentPage, loadData };
}

export default getTableData;
