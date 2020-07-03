import Vue from 'vue';
import Vuex from 'vuex';
import syncStorage from './plugins/syncStorage';

import allModules from './modules/';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ...allModules,
  },

  plugins: [
    syncStorage({}),
  ],

  state: {},
  mutations: {},
  actions: {},
  getters: {},
});
