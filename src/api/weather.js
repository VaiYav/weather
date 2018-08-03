import axios from 'axios'
const appid = '8420e09b9bf3d32e6921b5d1a1d49e21'
export default {
  fetchCityWeather: (payload = {}) => {
    return axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${payload.city}&appid=${appid}`, {
        responseType: 'json'
      })
  },
  updateCityWeather: (payload = {}) => {
    return axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${payload.city}&appid=${appid}`, {
        responseType: 'json'
      })
  }
}
