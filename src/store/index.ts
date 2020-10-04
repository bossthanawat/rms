import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import profile from "./modules/profile";
import history from "./modules/history";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    drawer: null,
  },
  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
  },
  modules: {
    auth,
    profile,
    // history
  },
});
