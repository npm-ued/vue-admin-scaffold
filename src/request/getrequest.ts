import axios, { AxiosInstance, Method } from 'axios';
import server from './server';
import { ElMessage, ElLoading } from 'element-plus';
import i18n from '@/i18n';
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type';
const $tc = i18n.global.tc;
interface ServerConfig {
  type: Method;
  data: any;
  isAsync?: boolean;
  success: any;
  error: any;
  bindName: string;
  isLoading?: boolean;
}
interface State {
  [key: string]: any;
}

interface ObjItem {
  [key: string]: any;
}

interface AjaxObj {
  url: string;
  method: Method;
}

// 定义myserver方法
class MyServer {
  server: AxiosInstance = server;
  // 当前this指向
  // nowHandle: any = null;
  /**
   * 当前实例对象 this
   * @param {any} obj
   * @return {MyServer}
   */
  // public bind(obj: any): MyServer {
  //   this.nowHandle = obj;
  //   return this;
  // }
  /**
   * 遍历api路由信息
   * @param  {String}  name  模块名
   * @param  {Object}  urlOb 路由信息
   */
  public parseRouter(name: string, urlOb: ObjItem): void {
    const ob: ObjItem = (this[name] = {});
    Object.keys(urlOb).forEach((item) => {
      ob[item] = this.sendMes.bind(this, name, item, urlOb[item]);
    });
  }

  /**
   * 发送请求信息
   * @param  {String}  moduleName 模块名
   * @param  {String}  name       api名
   * @param  {String}  url        请求地址
   * @param  {String}  config     自定义配置
   */
  public sendMes(
    moduleName: string,
    name: string,
    ajax: AjaxObj,
    config: ServerConfig
  ): Promise<any> {
    const configs = config || {};
    // 请求类型
    const type = configs.type || ajax.method || 'get';
    // 是否传参
    const data = configs.data || {};
    // 可自定义name
    const bindName = configs.bindName || name;
    // 是否异步
    const isAsync = configs.isAsync || true;
    // 是否全局loading
    const isLoading = config.isLoading || false;
    // 保存当前this
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self: MyServer = this;
    let loadingInstance: ILoadingInstance;
    // 发送前
    const beforeSend = function () {
      if (isLoading) {
        loadingInstance = ElLoading.service({
          lock: true,
          text: 'Loading'
        });
      }
      return Promise.resolve();
    };

    // axios有请求拦截
    // 处理数据，绑定前处理和绑定处理
    const before = function <T>(msg: T) {
      // 去除loading
      if (isLoading) {
        loadingInstance.close();
      }
      return msg;
    };

    // 默认处理方法
    const defaultFn = function <T>(res: T): T {
      // 请求成功之后，当前接口状态重置为可提交状态
      self[moduleName][bindName].state = 'ready';
      //请求自动绑定
      // const hander = self.nowHandle;
      // vue2.0 通过Vue.set动态绑定
      // if (hander) {
      //   Vue.set(hander, bindName, res.data);
      // }
      return res;
    };

    // 成功回调
    const success = configs.success || defaultFn;
    const callback = function (res: any) {
      return new Promise((resolve, reject) => {
        success(res, defaultFn);
        resolve(res);
      });
    };

    // 失败回调
    const errorFn = configs.error || defaultFn;
    const errorback = function (error: any) {
      return new Promise((resolve, reject) => {
        ElMessage({
          message: `${$tc('Common.NetworkFail')}`,
          type: 'error',
          duration: 10000
        });
        errorFn(error, defaultFn);
        reject(error);
      });
    };
    // 策略模式
    const state: State = {
      // get 方法,这里注意then的链条
      get: function () {
        const getResult = self.server.get(ajax.url, { params: data });
        return Promise.resolve()
          .then(beforeSend)
          .then(() => {
            return getResult;
          })
          .then(before)
          .then(callback)
          .catch(errorback);
      },
      // post 方法
      post: function () {
        const postResult = self.server.post(ajax.url, data);
        return Promise.resolve()
          .then(beforeSend)
          .then(() => {
            return postResult;
          })
          .then(before)
          .then(callback)
          .catch(errorback);
      }
    };
    // 如果是异步
    if (isAsync) {
      return state[type]();
    } else {
      // 防止重复请求
      if (self[moduleName][bindName].state == 'ready') {
        self[moduleName][bindName].state = 'pending';
        return state[type]();
      }
      return Promise.resolve({});
    }
  }
  [key: string]: any;
}
export default new MyServer();
