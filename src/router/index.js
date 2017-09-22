import Vue from 'vue'
import Router from 'vue-router'
import start from '@/views/characts/start'
import shakeFirst from '@/views/shakeSmart/shakeFirst'
import shakeSecond from '@/views/shakeSmart/shakeSecond'
import shakeThird from '@/views/shakeSmart/shakeThird'
import datePick from '@/views/characts/datePick' //出生
import houseArea from '@/views/characts/houseArea' //户型图

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
import toothpaste from '@/views/characts/toothpaste'
import orderFood from '@/views/characts/orderFood'
import camera from '@/views/characts/camera'
import hairStyle from '@/views/characts/hairStyle'
import unbear from '@/views/characts/unbear'
import knowMan from '@/views/characts/knowMan'
import mustHave from '@/views/characts/mustHave'
import trydo from '@/views/characts/try'
import dosome from '@/views/characts/dosome'
import sport from '@/views/characts/sport'
import sportW from '@/views/characts/sportW'
import choiceColor from '@/views/characts/choiceColor'
import choiceDraw from '@/views/characts/choiceDraw'
import choicePic from '@/views/characts/choicePic'

import likeStyle from '@/views/desinerStyle/index' //喜欢的风格
import result from '@/views/characts/result'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/start:userid',
      name: 'start',
      component: start
    },
    {
      path: '/shakeFirst',
      name: 'shakeFirst',
      component: shakeFirst
    },
    {
      path: '/shakeThird',
      name: 'shakeThird',
      component: shakeThird
    },
    {
      path: '/shakeSecond',
      name: 'shakeSecond',
      component: shakeSecond
    },
    {
      path: '/houseArea',
      name: 'houseArea',
      component: houseArea
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
    },
    {
      path: '/toothpaste',
      name: 'toothpaste',
      component: toothpaste
    },
    {
      path: '/orderFood',
      name: 'orderFood',
      component: orderFood
    },
    {
      path: '/camera',
      name: 'camera',
      component: camera
    },
    {
      path: '/hairStyle',
      name: 'hairStyle',
      component: hairStyle
    },
    {
      path: '/unbear',
      name: 'unbear',
      component: unbear
    },
    {
      path: '/knowMan',
      name: 'knowMan',
      component: knowMan
    },
    {
      path: '/mustHave',
      name: 'mustHave',
      component: mustHave
    },
    {
      path: '/try',
      name: 'try',
      component: trydo
    },
    {
      path: '/dosome',
      name: 'dosome',
      component: dosome
    },
    {
      path: '/sport',
      name: 'sport',
      component: sport
    },
    {
      path: '/sportW',
      name: 'sportW',
      component: sportW
    },
    {
      path: '/choiceColor',
      name: 'choiceColor',
      component: choiceColor
    },
    {
      path: '/choiceDraw',
      name: 'choiceDraw',
      component: choiceDraw
    },
    {
      path: '/choicePic',
      name: 'choicePic',
      component: choicePic
    },
    {
      path: '/result',
      name: 'result',
      component: result
    },
    {
      path: '/datePick',
      name: 'datePick',
      component: datePick
    },
    {
      path: '/likeStyle',
      name: 'likeStyle',
      component: likeStyle
    }
       
  ]
})
