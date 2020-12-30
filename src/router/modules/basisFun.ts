/*
 * @Author: vue admin scaffold
 * @Date: 2020-12-30 14:22:05
 * @Last Modified by: vue admin scaffold
 * @Last Modified time: 2020-12-30 14:59:06
 */
import HomePage from '@/views/home/home.vue';

export default [
  {
    path: '/basisFun',
    name: 'basisFun',
    component: HomePage,
    // sort: 0,
    meta: {
      title: 'BasisFun',
      icon: 'el-icon-s-shop',
      access: ['borrower_user_list']
    },
    children: [
      {
        path: 'addPage',
        name: 'addPage',
        meta: { title: 'AddPage', icon: 'md-list' },
        component: () => import('@/views/basisFun/addPage/addPage.vue')
      },
      {
        path: 'addMenu',
        name: 'addMenu',
        meta: { title: 'AddMenu', icon: 'md-list' },
        component: () => import('@/views/basisFun/addMenu/addMenu.vue')
      },
      {
        path: 'addStyle',
        name: 'addStyle',
        meta: { title: 'AddStyle', icon: 'md-list' },
        component: () => import('@/views/basisFun/addStyle/addStyle.vue')
      },
      {
        path: 'addGlobalStyle',
        name: 'addGlobalStyle',
        meta: { title: 'AddGlobalStyle', icon: 'md-list' },
        component: () =>
          import('@/views/basisFun/addGlobalStyle/addGlobalStyle.vue')
      },
      {
        path: 'postData',
        name: 'postData',
        meta: { title: 'PostData', icon: 'md-list' },
        component: () => import('@/views/basisFun/postData/postData.vue')
      },
      {
        path: 'moreLan',
        name: 'moreLan',
        meta: { title: 'MoreLan', icon: 'md-list' },
        component: () => import('@/views/basisFun/moreLan/moreLan.vue')
      }
    ]
  }
];
