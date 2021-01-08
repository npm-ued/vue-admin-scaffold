declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'vue/types/vue' {
  import VueRouter, { Route } from 'vue-router';
  interface Vue {
    $router: VueRouter;
    $route: Route;
  }
}

declare const enum FilterType {
  input = 'input',
  select = 'select',
  date = 'date',
  datetime = 'datetime',
  button = 'button'
}
