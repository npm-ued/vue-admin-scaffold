import HomePage from '@/views/main/main.vue';

export default [
  {
    path: '/user',
    name: 'user',
    component: HomePage,
    sort: 0,
    meta: {
      title: 'UserManager',
      icon: 'ios-contacts'
      // access: ['borrower_user_list']
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
  }
];
