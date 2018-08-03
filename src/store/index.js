import Vue from 'vue'
import Vuex from 'vuex'

import weather from './modules/weather'
Vue.use(Vuex)

const store = new Vuex.Store({
  actions: {},
  getters: {},
  modules: { weather },
  state: {},
  mutations: {}
})

export default store
