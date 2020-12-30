/*
 * @Author: vue admin scaffold
 * @Date: 2020-12-30 14:22:05
 * @Last Modified by: vue admin scaffold
 * @Last Modified time: 2020-12-30 14:41:33
 */
import HomePage from '@/views/home/home.vue';

export default [
  {
    path: '/config',
    name: 'config',
    component: HomePage,
    // sort: 0,
    meta: {
      title: 'Config',
      icon: 'el-icon-s-goods',
      access: ['borrower_user_list']
    },
    children: [
      {
        path: 'startConfig',
        name: 'startConfig',
        meta: { title: 'StartConfig', icon: 'md-list' },
        component: () => import('@/views/config/startConfig/startConfig.vue')
      },
      {
        path: 'bizConfig',
        name: 'bizConfig',
        meta: { title: 'BizConfig', icon: 'md-list' },
        component: () => import('@/views/config/bizConfig/bizConfig.vue')
      }
    ]
  }
];
