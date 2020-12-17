/*
 * @Author: vicshang
 * @Date: 2020-12-08 13:31:14
 * @Last Modified by: vicshang
 * @Last Modified time: 2020-12-08 14:35:28
 */
import HomePage from '@/views/home/home.vue';

export default [
  {
    path: '/system',
    name: 'system',
    component: HomePage,
    // sort: 0,
    meta: {
      title: 'SysManager',
      icon: 'el-icon-s-tools',
      access: ['borrower_user_list']
    },
    children: [
      {
        path: 'userSetting',
        name: 'userSetting',
        meta: { title: 'UserSetting', icon: 'md-list' },
        component: () => import('@/views/system/userSetting/userSetting.vue')
      },
      {
        path: 'roleManager',
        name: 'roleManager',
        meta: { title: 'RoleManager', icon: 'md-list' },
        component: () => import('@/views/system/roleManager/roleManager.vue')
      },
      {
        path: 'permission',
        name: 'permission',
        meta: { title: 'PromissionManager', icon: 'md-barcode' },
        component: () => import('@views/system/permission/permission.vue')
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: HomePage,
    // sort: 0,
    meta: {
      title: 'UserManager',
      icon: 'el-icon-user-solid',
      access: ['borrower_user_list']
    }
  }
];
