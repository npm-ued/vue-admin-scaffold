import { createI18n } from 'vue-i18n';
import ElementPlus from 'element-plus';
import en from 'element-plus/lib/locale/lang/en'; // 英文
import zhcn from 'element-plus/lib/locale/lang/zh-cn'; // 中文
import enUSLocal from './en-US/index';
import zhCNLocal from './zh-CN/index';
import { createApp } from 'vue';

const enum LanType {
  en = 'en',
  cn = 'zh-cn'
}

let systemLan: string = LanType.en;
const navigatorLan = navigator.language; // 获取浏览器的语言设置
if (navigatorLan.indexOf('zh') == 0) {
  systemLan = LanType.cn; // 汉语默认设置成中文简体
}
if (localStorage.getItem('locale')) {
  systemLan = localStorage.getItem('locale') as string;
  const lanArray: string[] = [LanType.cn, LanType.en];
  if (!lanArray.includes(systemLan)) {
    systemLan = LanType.en;
  }
}

const i18n = createI18n({
  locale: systemLan,
  messages: {
    'zh-cn': Object.assign(zhcn, zhCNLocal),
    en: Object.assign(en, enUSLocal)
  }
});

/**
 * 切换语言
 */
export const changeLanguage = function (): void {
  const activeLan = i18n.global.locale == LanType.cn ? LanType.en : LanType.cn;
  i18n.global.locale = activeLan; // 切换
  localStorage.setItem('locale', activeLan);
};

export default i18n;
