import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import info from '../store/info'

export default new Vuex.Store({
	modules: {
		info
	}
})