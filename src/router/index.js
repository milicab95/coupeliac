import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Stepper from '@/components/Stepper'

Vue.use(Router)
/* eslint-disable */

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/stepper',
      name: 'Stepper',
      component: Stepper
    }
  ]
})
