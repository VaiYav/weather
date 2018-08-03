<template lang="pug">
  div
    div
      strong {{city.name}}
    div(v-for="(weather, weatherIndex) in city.weather" :key="weatherIndex").desc
      img(:src="`http://openweathermap.org/img/w/${weather.icon}.png`" alt="")
      strong {{weather.description}}
    div
      button.button(@click="removeCity(cityIndex)") Remove city!
      button.button(@click="updateCity(cityIndex)") Update data!
      b-collapse(:open="false")
        button.button.is-primary(slot="trigger") Show more!
        div.notification
          div.content
            div.desc
              b-icon(pack="mdi" icon="water-percent" size="is-medium")
              span {{city.main.humidity}}
            div.desc
              span {{city.main.temp}}
              b-icon(pack="mdi" icon="temperature-kelvin" size="is-medium")
              span {{~~city.main.temp - 274}}
              b-icon(pack="mdi" icon="temperature-celsius" size="is-medium")
            div.desc
              b-icon(pack="mdi" icon="weather-windy" size="is-medium")
              span {{city.wind.speed}} m/s
            div.desc
              b-icon(pack="mdi" icon="weather-partlycloudy" size="is-medium")
              span {{city.clouds.all}} %
</template>

<script>
  export default {
    name: 'City',
    props: {
      city: {type: Object, require: true},
      cityIndex: {type: Number, require: true}
    },
    methods: {
      updateCity (index) {
        this.$store.dispatch('updateCityWeather', {index: index, city: this.city.name})
      },
      removeCity (index) {
        this.$store.dispatch('removeCityWeather', {index})
      }
    }
  }
</script>

<style scoped lang="scss">
  .desc {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
