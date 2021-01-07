import axios from 'axios';
import qs from 'qs';
// 从环境中获取host
const HOST = process.env.VUE_APP_HOST;
const server = axios.create({
  baseURL: HOST, // 域名地址
  timeout: 5000
});
console.log('axios 调用了一次', server);
// server.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded';

// 请求拦截
server.interceptors.request.use(
  (config) => {
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
    return Promise.reject(error);
  }
);
// 响应拦截
server.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default server;
