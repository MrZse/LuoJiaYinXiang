import Vue from 'vue'
import Router from 'vue-router'
import Opening from '@/pages/Opening/Opening'
import Home from '@/pages/Home/Home'
import Detail from '@/pages/Detail/Detail'

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
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
