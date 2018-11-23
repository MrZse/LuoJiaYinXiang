import Vue from 'vue'
import Router from 'vue-router'
import Opening from '@/pages/Opening/Opening'
import Home from '@/pages/Home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Opening',
      component: Opening
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
