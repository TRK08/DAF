

const popup = {
  namespaced: true,
  state: {
    popupMode: null
  },
  mutations: {
    SET_POPUP_MODE(state, mode) {
      state.popupMode = mode
    }
  },
  actions: {
    TAKE_POPUP_MODE({ commit }, payload) {
      commit('SET_POPUP_MODE', payload)
    }
  },
  getters: {
    getPopupMode(state) {
      return state.popupMode
    }
  }
}

export default popup