export default {
  namespaced: true,
  state: {
    name: '111'
  },
  mutations: {
    change(state: any, str: string) {
      console.log('app 带参', str);
      state.name = Math.random();
    }
  },
  actions: {},
  getters: {}
};
