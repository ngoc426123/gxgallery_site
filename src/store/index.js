import Vue from 'vue'
import Vuex from 'vuex'

// MODULES
import albums from './modules/albums.js'

Vue.use(Vuex);

const modules = {
  albums
};

for (let mod in modules) {
  modules[mod].namespaced = true
}

export default new Vuex.Store({
  modules
});