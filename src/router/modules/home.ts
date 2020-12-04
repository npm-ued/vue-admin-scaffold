import Main from '@/main.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: Main,
    sort: 0,
    meta: {
      title: 'HomePage',
      icon: 'md-home',
      hideInMenu: true,
      hideInBread: true
    }
  },
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
