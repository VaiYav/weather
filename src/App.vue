<template lang="pug">
  div#app
    header
      b-field(label="")
        b-input(placeholder="Add city", rounded, v-model="city", @keyup.enter.native="submit")
      button(@click="submit").button Send
    main
      router-view
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    city: '',
    cities: ['Kiev', 'Kharkiv', 'Miami']
  }),
  methods: {
    submit () {
      this.$store.dispatch('fetchCityWeather', {city: this.city})
      this.city = ''
    }
  },
  mounted () {
    for (let i = 0; i < this.cities.length; i++) {
      this.$store.dispatch('fetchCityWeather', {city: this.cities[i]})
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.label{
  color: #fff;
}
main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  padding: 10px;
  background-color: #35495E;
  color: #ffffff;
  display: flex;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
