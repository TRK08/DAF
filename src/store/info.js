import axios from 'axios';
import { API } from '../config'

const info = {
  namespaced: true,
  state: {
    menu: null,
    contacts: null,
    reasons: null,
    services: null,
    objects: null,
    partners: null,
    customers: null,
    vehicles: null,
    vehiclesCategory: null,
    vacancies: null,
    aboutInfo: null
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
    SET_CUSTOMERS(state, payload) {
      state.customers = payload
    },
    SET_VEHICLES(state, payload) {
      state.vehicles = payload
    },
    SET_VEHICLES_CATEGORY(state, payload) {
      state.vehiclesCategory = payload
    },
    SET_VACANCIES(state, payload) {
      state.vacancies = payload
    },
    SET_ABOUT_INFO(state, payload) {
      state.aboutInfo = payload
    }
  },
  actions: {
    LOAD_MENU({ commit }) {
      axios.get(`${API}get/menu?id=2`).then(res => {
        commit('SET_MENU', res.data.data)
      }).catch(err => {
        console.log(err, 'load menu error');
      })
    },
    LOAD_MAIN_INFO({ commit }) {
      axios.get(`${API}get/information`).then(res => {
        commit('SET_CONTACTS', res.data.data.info)
        commit('SET_REASONS', res.data.data.main.fivep)
      }).catch(err => {
        console.log(err, 'load main info error');
      })
    },
    LOAD_SERVICES({ commit }) {
      axios.get(`${API}get/services`).then(res => {
        commit('SET_SERVICES', res.data.data)
      }).catch(err => {
        console.log(err, 'load services error');
      })
    },
    LOAD_OBJECTS({ commit }) {
      axios.get(`${API}get/objects`).then(res => {
        commit("SET_OBJECTS", res.data.data)
      }).catch(err => {
        console.log(err, 'load objects error');
      })
    },
    LOAD_PARTNERS({ commit }) {
      axios.get(`${API}get/partners`).then(res => {
        commit('SET_PARTNERS', res.data.data)
      }).catch(err => {
        console.log(err, 'load partners error');
      })
    },
    LOAD_CUSTOMERS({ commit }) {
      axios.get(`${API}get/customers`).then(res => {
        commit('SET_CUSTOMERS', res.data.data)
      }).catch(err => {
        console.log(err, 'load partners error');
      })
    },
    LOAD_VEHICLES({ commit }) {
      axios.get(`${API}get/technique`).then(res => {
        commit('SET_VEHICLES', res.data.data)
      }).catch(err => {
        console.log(err, 'load vehicles error');
      })
    },
    LOAD_VEHICLES_CATEGORY({ commit }) {
      axios.get(`${API}get/vtechnique`).then(res => {
        let result = res.data.data.map(item => {
          item.isActive = false
          return item
        })
        commit('SET_VEHICLES_CATEGORY', result)
      }).catch(err => {
        console.log(err, 'load vehicles category error');
      })
    },
    LOAD_VACANCIES({ commit }) {
      axios.get(`${API}get/vacancy`).then(res => {
        commit("SET_VACANCIES", res.data.data)
      }).catch(err => {
        console.log(err, 'load vacancies error');
      })
    },
    LOAD_ABOUT_INFO({ commit }) {
      axios.get(`${API}get/about`).then(res => {
        console.log(res.data.data.blocks);
        commit("SET_ABOUT_INFO", res.data.data.blocks)
      }).catch(err => {
        console.log(err, 'load about info error');
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
    getCustomers(state) {
      return state.customers
    },
    getVehicles(state) {
      return state.vehicles
    },
    getVehiclesCategory(state) {
      return state.vehiclesCategory
    },
    getVacancies(state) {
      return state.vacancies
    },
    getSingleCatTechnique: (state) => (id) => {
      if (state.vehicles) {
        if (id) {
          let arr = []
          state.vehicles.filter((item) => {
            if (item.cat) {
              item.cat.forEach((cat) => {
                if (cat.term_id === id) {
                  arr.push(item);
                }
              });
            }
          });
          return arr
        } else {
          return state.vehicles
        }
      }
    },
    getSingleServices: (state) => (slug) => {
      if (state.services) {
        return state.services.find(item => item.slug === slug)
      }
    },
    getAboutInfo(state) {
      return state.aboutInfo
    }
  },
}

export default info