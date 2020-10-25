import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products'
import columns from './modules/columns'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    columns
  }
})