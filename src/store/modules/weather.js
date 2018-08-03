import * as types from '../mutation-types'
import weatherAPI from '@/api/weather'

const state = {
  citiesWeather: []
}

const getters = {
  citiesWeather: (state) => state.citiesWeather
}

const actions = {
  fetchCityWeather ({state, commit}, params) {
    weatherAPI
      .fetchCityWeather(params)
      .then(payload => {
        if (state.citiesWeather.find(cw => cw.id === payload.data.id)) {
          this._vm.$snackbar.open({
            duration: 5000,
            message: 'Chosen city already added',
            type: 'is-primary',
            position: 'is-top'
          })
        } else {
          commit(types.FETCH_CITY_WEATHER, payload.data)
        }
      })
      .catch(payload => {
        this._vm.$snackbar.open({
          duration: 5000,
          message: 'Chosen city not found',
          type: 'is-warning',
          position: 'is-top'
        })
      })
  },
  updateCityWeather ({state, commit}, params) {
    weatherAPI
      .updateCityWeather(params)
      .then(payload => {
        commit(types.UPDATE_CITY_WEATHER, {data: payload.data, index: params.index})
        this._vm.$snackbar.open({
          duration: 2000,
          message: 'Update success',
          type: 'is-primary',
          position: 'is-top'
        })
      })
      .catch(payload => {
        this._vm.$snackbar.open({
          duration: 2000,
          message: 'Something went wrong',
          type: 'is-primary',
          position: 'is-top'
        })
      })
  },
  removeCityWeather ({state, commit}, params) {
    commit('REMOVE_CITY_WEATHER', params)
  }
}

const mutations = {
  [types.FETCH_CITY_WEATHER] (state, payload) {
    state.citiesWeather.push(payload)
  },
  [types.UPDATE_CITY_WEATHER] (state, payload) {
    state.citiesWeather[payload.index] = payload.data
  },
  [types.REMOVE_CITY_WEATHER] (state, payload) {
    state.citiesWeather.splice(payload.index, 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
