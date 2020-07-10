import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import images from "./modules/images";
import VuePageTransition from "vue-page-transition";

Vue.use(VuePageTransition);
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        images
    }
})