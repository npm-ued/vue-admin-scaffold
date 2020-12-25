export default {
  namespaced: true,
  state: {
    name: '111',
    tagNavList: [] // 标签页
  },
  mutations: {
    change(state: any, str: string) {
      console.log('app 带参', str);
      state.name = Math.random();
    },
    /**
     * 设置navlist
     * @param state 状态
     * @param navList 设置tag nav
     */
    setNavList(state: any, navList: Array<any>) {
      console.log('设置nav list');
      state.tagNavList = navList;
    }
  },
  actions: {},
  getters: {}
};
