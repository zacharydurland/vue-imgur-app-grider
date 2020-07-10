import api from "../../api/imgur";
import { router } from "../../main";

const state = {
  images: [],
};

const getters = {
  allImages: (state) => state.images,
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit("setImages", response.data.data);
  },
  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth;
    await api.uploadImages(token, images);
    router.push("/");
  },
  async deleteImage({rootState},deletehash){
    const { token } = rootState.auth;
    await api.deleteImage(token,deletehash)
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
