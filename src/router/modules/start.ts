/*
 * @Author: vicshang
 * @Date: 2020-12-08 13:31:14
 * @Last Modified by: vicshang
 * @Last Modified time: 2020-12-08 14:35:28
 */
import HomePage from '@/views/home/home.vue';

export default [
  {
    path: '/quickStart',
    name: 'quickStart',
    component: HomePage,
    // sort: 0,
    meta: {
      title: 'QuickStart',
      icon: 'el-icon-eleme',
      access: ['borrower_user_list']
    },
    children: [
      {
        path: 'installation',
        name: 'installation',
        meta: { title: 'Installation', icon: 'md-list' },
        component: () =>
          import('@/views/quickStart/installation/installation.vue')
      },
      {
        path: 'firstSetting',
        name: 'firstSetting',
        meta: { title: 'FirstSetting', icon: 'md-list' },
        component: () =>
          import('@/views/quickStart/firstInstall/firstInstall.vue')
      },
      {
        path: 'catalog',
        name: 'catalog',
        meta: { title: 'Catalog', icon: 'md-barcode' },
        component: () => import('@views/quickStart/catalog/catalog.vue')
      }
    ]
  }
];
