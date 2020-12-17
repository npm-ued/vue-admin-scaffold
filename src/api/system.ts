import { AjaxMethod } from './index';
export interface LoginApi {
  userInfo: AjaxMethod;
  loginOut: AjaxMethod;
}

export default {
  userInfo: '/user/userinfo',
  loginOut: '/v1/login/out'
};
