

const popup = {
  namespaced: true,
  state: {
    popupMode: null,
    popupData: null
  },
  mutations: {
    SET_POPUP_MODE(state, mode) {
      state.popupMode = mode
    },
    SET_POPUP_DATA(state, data) {
      state.popupData = data
    }
  },
  actions: {
    TAKE_POPUP_MODE({ commit }, payload) {
      commit('SET_POPUP_MODE', payload.mode)
      if (payload.data) {
        commit('SET_POPUP_DATA', payload.data)
      }

    }
  },
  getters: {
    getPopupMode(state) {
      return state.popupMode
    },
    getPopupData(state) {
      return state.popupData
    },
  }
}

export default popup