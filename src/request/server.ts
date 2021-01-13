import axios from 'axios';
import qs from 'qs';
import { ElMessage } from 'element-plus';
import i18n from '@/i18n';
const $tc = i18n.global.tc;

// 从环境中获取host
const HOST = process.env.VUE_APP_HOST;
const server = axios.create({
  baseURL: HOST, // 域名地址
  timeout: 5000
});
// server.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded';

// 请求拦截
server.interceptors.request.use(
  (config) => {
    // 本地存在时 添加表头x-access-token
    if (localStorage.JWT_TOKEN) {
      config.headers['Authorization'] = `${localStorage.JWT_TOKEN}`;
    }
    const lang = navigator.language || 'zh-cn'; // 获取浏览器的语言设置
    config.headers['Accept-Language'] = localStorage.locale || lang;

    if (config.method == 'post') {
      config.data = {
        ...config.data
      };
    } else {
      //get
      config.params = {
        ...config.params
      };
    }
    // 数据
    config.data = qs.stringify(config.data);
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
// 响应拦截
server.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response && error.response.status) {
      const statusCode = error.response.status;
      if (statusCode == 401 || statusCode == 402 || statusCode == 403) {
        // 登录失效
        if (statusCode == 402) {
          ElMessage({
            message: `${$tc('Common.LoginExpired')}`,
            type: 'warning'
          });
        } else {
          // 服务器响应异常（状态：002），请重新登录系统！
          ElMessage({
            message: `${error.message || $tc('Common.ServerException')}`,
            type: 'error'
          });
        }
        localStorage.JWT_TOKEN = '';
        localStorage.userPermissions = '';
        localStorage.userInfo = '';
        // 跳转到登录
        window.location.href = '/login';
        // this.$router.push('/login');
      } else if (error.message || error.msg) {
        console.log(error.response.data);
        const errorMessage =
          error && error.response && error.response.data
            ? `${error.response.data.message || error.response.data.msg} (${
                error.response.data.status || error.response.data.code
              })`
            : '';
        ElMessage({
          message: `${errorMessage || error.message}`,
          type: 'error'
        });
      } else {
        // 服务器响应异常（状态：001），请刷新页面，重新尝试！
        ElMessage({
          message: `${$tc('Common.ServerExceptionTryAgain')}`,
          type: 'error'
        });
      }
    } else {
      ElMessage({
        message: `${$tc('Common.NetworkFail')}`,
        type: 'error'
      });
    }
    return Promise.reject(error);
  }
);

export default server;
