import { App } from 'vue';
import ElementPlus from 'element-plus';
import zhcn from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';

import locale from 'element-plus/lib/locale';

// TODO element-plus 如何根据vue的国际化切换呢
export default (app: App) => {
  app.use(ElementPlus, { locale: zhcn });
};
