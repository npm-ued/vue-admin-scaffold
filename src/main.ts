import { createApp } from 'vue';
import routers from './router/modules';
import App from './App.vue';
import router from './router';

import store from './store';
import installElementPlus from './plugins/element';
import installGlobalComponents from './plugins/global-components';
import './assets/css/reset.css';

const app = createApp(App).use(store).use(router);
installElementPlus(app); // 使用element plus
installGlobalComponents(app); // 安装自定义全局插件
app.mount('#app');
