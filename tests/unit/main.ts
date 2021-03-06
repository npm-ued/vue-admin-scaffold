import i18n from '@/i18n';
import { store, key } from '@/store';
import router from '@/router';
// import mockAxios from './mock/axios';
import globalComponents from '@/components';
import ElementPlus from 'element-plus';
import zhcn from 'element-plus/lib/locale/lang/zh-cn';
import { mount } from '@vue/test-utils';
import api from '@/api';
// mock api
jest.mock('@/api');
// mock router
// jest.mock('@/router');

interface InitParams {
  props?: any;
}
/**
 * 根据gobal生成单测实例
 * @param component 组件引用
 * @param props props属性
 */
export function initPageWithGlobal(component: any, params: InitParams = {}) {
  const { props } = params;
  const wrapper = mount(component, {
    props,
    global: {
      plugins: [
        i18n,
        // 目前TypeError: removeHistoryListener is not a function
        router,
        [store, key],
        globalComponents,
        [ElementPlus, { locale: zhcn }]
      ],
      config: {
        globalProperties: {
          $ajax: api
        }
      }
    }
  });
  return wrapper;
}
