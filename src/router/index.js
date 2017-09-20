import Vue from 'vue'
import Router from 'vue-router'
import sex from '@/views/characts/sex'
import fingerTips from '@/views/characts/fingerTips'
import finger from '@/views/characts/finger'
import clock from '@/views/characts/clock'
import sleep from '@/views/characts/sleep'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sex',
      component: sex
    },
    {
      path: '/sex',
      name: 'sex',
      component: sex
    },
    {
      path: '/fingerTips',
      name: 'fingerTips',
      component: fingerTips
    },
    {
      path: '/clock',
      name: 'clock',
      component: clock
    },
    {
      path: '/finger',
      name: 'finger',
      component: finger
    },
    {
      path: '/sleep',
      name: 'sleep',
      component: sleep
    }
   
  ]
})
