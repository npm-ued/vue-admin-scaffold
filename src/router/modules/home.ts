import HomePage from '@/views/home/home.vue';
export default {
  path: '/',
  name: 'home',
  component: HomePage,
  sort: 0,
  meta: {
    title: 'HomePage',
    icon: 'el-icon-s-home',
    hideInMenu: true,
    hideInBread: true
  }
};
