import Home from './home';
export default [
  Home,
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login',
      hideInMenu: true
    },
    component: () => import('@/views/login/login.vue')
  }
];
