import { AxiosInstance } from 'axios';
export interface LoginApi {
  userInfo: any;
  loginOut: any;
}
// TODO 编写函数声明和配置声明
export default {
  userInfo: '/user/userinfo',
  loginOut: '/v1/login/out'
};
