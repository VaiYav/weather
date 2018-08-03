<template lang="pug">
  div.columns.is-gapless
    city(v-for="(city, cityIndex) in citiesWeather",
      :city="city",
      :cityIndex="cityIndex",
      :key="cityIndex").column
</template>

<script>
  import city from '@/components/City.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'weather',
    data () {
      return {
      }
    },
    components: {
      city
    },
    computed: {
      ...mapGetters(['citiesWeather'])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
