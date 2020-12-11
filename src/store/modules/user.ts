export default {
  namespaced: true,
  state: {
    username: '嘿嘿'
  },
  mutations: {
    // 调用的时候需要带上命名空间：如 $store.commit('user/change')
    change(state: any, str: string) {
      console.log('user 带参', str);
      state.username = Math.random();
    }
  },
  actions: {},
  getters: {}
};
