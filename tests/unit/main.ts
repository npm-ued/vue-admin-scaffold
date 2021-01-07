import i18n from '@/i18n';
import store from '@/store';
import router from '@/router';
// import mockAxios from './mock/axios';
import globalComponents from '@/components';
import ElementPlus from 'element-plus';
import zhcn from 'element-plus/lib/locale/lang/zh-cn';
import { mount } from '@vue/test-utils';
import api from '@/api';
/**
 * 根据gobal生成单测实例
 * @param component 组件引用
 * @param props props属性
 */
export function initPageWithGlobal(component: any, props?: any) {
  const wrapper = mount(component, {
    props,
    global: {
      plugins: [
        i18n,
        // 目前TypeError: removeHistoryListener is not a function
        // router,
        store,
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
