import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import app from './modules/app';
import user from './modules/user';
export interface State {
  app: any;
  user: any;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    user
  }
});
