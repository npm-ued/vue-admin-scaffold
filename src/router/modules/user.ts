import HomePage from '@/views/home/home.vue';
export default [
  {
    path: '/user',
    name: 'user',
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
        meta: { title: 'UserList', icon: 'el-icon-s-grid' },
        component: () => import('@/views/user/userList.vue')
      },
      {
        path: 'userInfo',
        name: 'userInfo',
        meta: { title: 'UserList', icon: 'el-icon-s-grid' },
        component: () => import('@/views/user/userInfo/userInfo.vue')
      }
    ]
  }
];
