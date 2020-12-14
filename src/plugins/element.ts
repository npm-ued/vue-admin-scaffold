import { App } from 'vue';
import ElementPlus from 'element-plus';
import lang from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';

import locale from 'element-plus/lib/locale';

export default (app: App) => {
  locale.use(lang);
  locale.use(en);
  app.use(ElementPlus);
};
