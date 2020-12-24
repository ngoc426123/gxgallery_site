import { callAPI } from '../../utils/https'

export default {
  state: {
    listAlbums: [],
  },

  getter: {

  },

  mutations: {
    listAlbums: (state, data) => state.listAlbums = data,
  },

  actions: {
    getListAlbums: async function ({commit}) {
      const ret = await callAPI('https://thuvienanh.gxphuhoa.org/api/albums?limit=21');

      commit('listAlbums', ret.data);
    }
  },
}