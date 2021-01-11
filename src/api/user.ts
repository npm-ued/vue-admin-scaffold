import { AjaxMethod } from './index';
export interface UserApi {
  userInfo: AjaxMethod;
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
  }
};
