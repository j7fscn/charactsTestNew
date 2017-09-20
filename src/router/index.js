import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import sleep from '@/views/characts/sleep'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/sleep',
      name: 'sleep',
      component: sleep
    }
  ]
})
