import { AjaxMethod } from './index';
export interface LoginApi {
  userInfo: AjaxMethod;
  loginOut: AjaxMethod;
}
// TODO 编写函数声明和配置声明
export default {
  userInfo: '/user/userinfo',
  loginOut: '/v1/login/out'
};
