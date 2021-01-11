// initial satate
const state = {
  tagNavList: [] // 标签页
};
// getters
const getters = {};
// actios
const actions = {};
// mutations
const mutations = {
  /**
   * 设置navlist
   * @param state 状态
   * @param navList 设置tag nav
   */
  setNavList(state: any, navList: Array<any>) {
    state.tagNavList = navList;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
