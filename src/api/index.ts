import { Method } from 'axios';
import myserver from '../request/getrequest';
import login from './login';
import shop from './shop';
import user from './user';
const modules: Module = {
  login,
  shop,
  user
};
// 按模块组册
for (const moduleName in modules) {
  myserver.parseRouter(moduleName, modules[moduleName]);
}

interface Module {
  [moduleName: string]: {};
}
export interface AjaxMethod {
  (ajaxConfig: AjaxsRequestConfig): Promise<any>;
}

interface AjaxsRequestConfig {
  type?: Method;
  data?: {};
  isAsync?: boolean;
  success?: SuccessCallback;
  error?: ErrorCallBack;
}

interface SuccessCallback {
  (res: any, d: any): any;
}

interface ErrorCallBack {
  (err: any): any;
}

export default myserver;
