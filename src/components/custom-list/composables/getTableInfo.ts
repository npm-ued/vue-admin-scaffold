import { LoginApi } from '@/api/login';
import { getCurrentInstance, ref } from 'vue';
interface DataItem {
  [propName: string]: any;
}

function getTableData() {
  const dataArr = ref<any>([]);
  const currentPage = ref(1);
  const totalCount = ref(0);
  const tableLoading = ref(false);
  // 获取vue对象
  const instance = getCurrentInstance();
  const $ajax = instance
    ? instance.appContext.config.globalProperties.$ajax
    : null;
  /**
   * 加载数据
   * @param pageNum 当前页码
   * @param pageSize 每页条数
   */
  const loadData = (pageNum = 1, pageSize = 10) => {
    const loginApi: LoginApi = $ajax.login;
    tableLoading.value = true;
    loginApi.userList({
      data: {},
      success: function (res: any, d: any) {
        const res1 = res.data;
        const list1 = d(res1);
        const { data } = res1;
        const { list, total } = data;
        dataArr.value = list;
        totalCount.value = total;
        tableLoading.value = false;
      },
      error: function (error: any) {
        tableLoading.value = false;
        console.log(error);
      }
    });
  };
  loadData();
  return { dataArr, totalCount, tableLoading, currentPage, loadData };
}

export default getTableData;
