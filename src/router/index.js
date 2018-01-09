import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import conponent from '@/components/component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/component',
      name: 'conponent',
      component: conponent
    }
  ]
})
