import axios from 'axios';

const info = {
  namespaced: true,
  state: {
    menu: null,
    contacts: null,
    reasons: null,
    services: null,
    objects: null,
    partners: null,
    vehicles: null
  },
  mutations: {
    SET_MENU(state, payload) {
      state.menu = payload
    },
    SET_CONTACTS(state, payload) {
      state.contacts = payload
    },
    SET_REASONS(state, payload) {
      state.reasons = payload
    },
    SET_SERVICES(state, payload) {
      state.services = payload
    },
    SET_OBJECTS(state, payload) {
      state.objects = payload
    },
    SET_PARTNERS(state, payload) {
      state.partners = payload
    },
    SET_VEHICLES(state, payload) {
      state.vehicles = payload
    }
  },
  actions: {
    LOAD_MENU({ commit }) {
      axios.get('https://daf.webink.site/wp-json/daf/v1/get/menu?id=2').then(res => {
        commit('SET_MENU', res.data.data)
      }).catch(err => {
        console.log(err, 'load menu error');
      })
    },
    LOAD_MAIN_INFO({ commit }) {
      axios.get('https://daf.webink.site/wp-json/daf/v1/get/information').then(res => {
        commit('SET_CONTACTS', res.data.data.info)
        commit('SET_REASONS', res.data.data.main.fivep)
      }).catch(err => {
        console.log(err, 'load main info error');
      })
    },
    LOAD_SERVICES({ commit }) {
      axios.get('https://daf.webink.site/wp-json/daf/v1/get/services').then(res => {
        commit('SET_SERVICES', res.data.data)
      }).catch(err => {
        console.log(err, 'load services error');
      })
    },
    LOAD_OBJECTS({ commit }) {
      axios.get('https://daf.webink.site/wp-json/daf/v1/get/objects').then(res => {
        commit("SET_OBJECTS", res.data.data)
      }).catch(err => {
        console.log(err, 'load objects error');
      })
    },
    LOAD_PARTNERS({ commit }) {
      axios.get('https://daf.webink.site/wp-json/daf/v1/get/partners').then(res => {
        commit('SET_PARTNERS', res.data.data)
      }).catch(err => {
        console.log(err, 'load partners error');
      })
    },
    LOAD_VEHICLES({ commit }) {
      axios.get('https://daf.webink.site/wp-json/daf/v1/get/technique').then(res => {
        commit('SET_VEHICLES', res.data.data)
      }).catch(err => {
        console.log(err, 'load vehicles error');
      })
    }
  },
  getters: {
    getMenu(state) {
      return state.menu
    },
    getContacts(state) {
      return state.contacts
    },
    getReasons(state) {
      return state.reasons
    },
    getServices(state) {
      return state.services
    },
    getObjects(state) {
      return state.objects
    },
    getPartners(state) {
      return state.partners
    },
    getVehicles(state) {
      return state.vehicles
    }
  },
}

export default info