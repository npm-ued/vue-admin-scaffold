import vue from 'vue';
import { createI18n } from 'vue-i18n';
import en from 'element-plus/lib/locale/lang/en'; // 英文
import zhcn from 'element-plus/lib/locale/lang/zh-cn'; // 中文
import enUSLocal from './en-US/index';
import zhCNLocal from './zh-CN/index';

const i18n = createI18n({
  locale: 'zh-cn',
  messages: {
    'zh-cn': Object.assign(zhcn, zhCNLocal),
    en: Object.assign(en, enUSLocal)
  }
});

export default i18n;
