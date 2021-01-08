export default {
  namespaced: true,
  state: {
    tagNavList: [] // 标签页
  },
  mutations: {
    /**
     * 设置navlist
     * @param state 状态
     * @param navList 设置tag nav
     */
    setNavList(state: any, navList: Array<any>) {
      state.tagNavList = navList;
    }
  },
  actions: {},
  getters: {}
};
