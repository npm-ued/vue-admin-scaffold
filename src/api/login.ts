import { AjaxMethod } from './index';
export interface LoginApi {
  userInfo: AjaxMethod;
  loginOut: AjaxMethod;
  userList: AjaxMethod;
}

export default {
  userInfo: {
    url: '/user/userinfo',
    method: 'get'
  },
  userList: {
    url: '/user/users',
    method: 'get'
  },
  loginOut: {
    url: '/v1/login/out',
    method: 'get'
  }
};
