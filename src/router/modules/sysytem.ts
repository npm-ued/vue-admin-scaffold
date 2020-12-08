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
      title: 'UserManager',
      icon: 'el-icon-user-solid',
      access: ['borrower_user_list']
    },
    children: [
      {
        path: 'userList',
        name: 'userList',
        meta: { title: 'UserList', icon: 'md-list' },
        component: () => import('@/views/user/userList.vue')
      },
      {
        path: 'userInfo',
        name: 'userInfo',
        meta: { title: 'UserList', icon: 'md-list' },
        component: () => import('@/views/user/userInfo.vue')
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
