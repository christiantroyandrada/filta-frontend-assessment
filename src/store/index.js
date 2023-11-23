import { createStore } from 'vuex'
import Data from '../../questions/data.json'
export default createStore({
  state: {
    deviceWidth: 0,
    backendData: []
  },
  mutations: {
    setDeviceWidth (state, param) {
      state.deviceWidth = param
    },
    setBackendData (state, param) {
      state.backendData = param
    }
  },
  actions: {
    async loadJSONData ({ commit }) {
      const loadedData = JSON.stringify(Data)
      commit('setBackendData', loadedData)
    }
  },
  modules: {
  }
})
