import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import info from '../store/info'
import popup from '../store/popup'

export default new Vuex.Store({
	modules: {
		info,
		popup
	}
})