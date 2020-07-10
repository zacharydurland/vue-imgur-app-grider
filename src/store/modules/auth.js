import api from "../../api/imgur";
import qs from "qs";
import { router } from "../../main";

const state = {
  token: window.localStorage.getItem("imgur_token"),
  username: window.localStorage.getItem("imgur_username"),
};

const getters = {
  isLoggedIn(state) {
    return !!state.token;
  },
  username(state) {
    return state.username;
  },
};

const actions = {
  login() {
    api.login();
  },
  logout({ commit }) {
    commit("setToken", null);
    commit("setUsername", null);
    window.localStorage.setItem("imgur_token", "");
    window.localStorage.setItem("imgur_username", "");
  },
  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace("#", ""));
    const { account_username, access_token } = query;
    console.log(query);
    commit("setToken", access_token);
    commit("setUsername", account_username);
    window.localStorage.setItem("imgur_token", access_token);
    window.localStorage.setItem("imgur_username", account_username);
    router.push("/");
  }
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setUsername(state, username) {
    state.username = username;
  },
};

export default { state, getters, actions, mutations };
