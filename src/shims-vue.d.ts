declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// declare module 'vue/types/vue' {
//   import VueRouter, { Route } from 'vue-router';
//   interface Vue {
//     $router: VueRouter;
//     $route: Route;
//   }
// }

// declare module 'vue-router' {
//   import { RouteRecordRaw } from 'vue-router';
//   interface RouteRecordRaw {
//     sort?: number;
//   }
// }
