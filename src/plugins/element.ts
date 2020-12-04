import ElementPlus from 'element-plus';
import lang from 'element-plus/lib/locale/lang/zh-cn';
import locale from 'element-plus/lib/locale';

export default (app: any) => {
  locale.use(lang);
  app.use(ElementPlus);
};
