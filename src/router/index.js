import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const lazyLoading = (name) => () => import(`@/components/${name}.vue`)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Weather',
      component: lazyLoading('Weather')
    }
  ]
})
