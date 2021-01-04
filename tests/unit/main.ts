import { config } from '@vue/test-utils';
import installElementPlus from '@/plugins/element';
// import ElementPlus from 'element-plus';
import installGlobalComponents from '@/plugins/global-components';
import { App } from 'vue';

const myAliasPlugin = (wrapper: any) => {
  return {
    $el: wrapper.element // simple aliases
  };
};

// config.plugins.VueWrapper.installedPlugins(installElementPlus);
// config.plugins.VueWrapper.install(installGlobalComponents);
