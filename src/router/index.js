import Vue from 'vue'
import Router from 'vue-router'
import sex from '@/views/characts/sex'
import fingerTips from '@/views/characts/fingerTips'
import finger from '@/views/characts/finger'
import clock from '@/views/characts/clock'
import travel from '@/views/characts/travel'
import faceScore from '@/views/characts/faceScore'
import watch from '@/views/characts/watch'
import shoes from '@/views/characts/shoes'
import skillStockings from '@/views/characts/skillStockings'
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
      path: '/travel',
      name: 'travel',
      component: travel
    },
    {
      path: '/faceScore',
      name: 'faceScore',
      component: faceScore
    },
    {
      path: '/watch',
      name: 'watch',
      component: watch
    },
    {
      path: '/shoes',
      name: 'shoes',
      component: shoes
    },
    {
      path: '/skillStockings',
      name: 'skillStockings',
      component: skillStockings
    },
    {
      path: '/sleep',
      name: 'sleep',
      component: sleep
    }
   
  ]
})
