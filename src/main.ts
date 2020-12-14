import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import api from './api';
import { devtools } from './devtools';

import store from './store';
import installElementPlus from './plugins/element';
import installGlobalComponents from './plugins/global-components';
import installI18n from './plugins/i18n';
import './assets/css/reset.css';

const app = createApp(App).use(devtools).use(store).use(router);
// api绑定到vue实例上，基于可以方便的使用this.$ajax了
app.config.globalProperties.$ajax = api;

installI18n(app); // i18n
installElementPlus(app); // 使用element plus
installGlobalComponents(app); // 安装自定义全局插件
app.mount('#app');
