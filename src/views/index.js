import Vue from 'vue'
import Router from 'vue-router'
//进入测试判断
import start from '@/views/characts/start'
import shareStart from '@/views/testResult/shareStart'
//抖机灵
import shakeFirst from '@/views/shakeSmart/shakeFirst'
import shakeSecond from '@/views/shakeSmart/shakeSecond'
import shakeThird from '@/views/shakeSmart/shakeThird'

import shakeResult from '@/views/shakeSmart/result' //抖机过渡页面
//关于我
import datePick from '@/views/aboutMe/datePick' //出生
import houseArea from '@/views/aboutMe/houseArea' //户型图
import readyGo from '@/views/aboutMe/readyGo' //转场
// 性格测试
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

import charactsResult from '@/views/characts/result' //性格过渡页面
//风格测试
import likeStyle from '@/views/desinerStyle/index' //喜欢的风格
import likeMiddle from '@/views/desinerStyle/result'

import result from '@/views/testResult/result'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: start
    },
    {
      path: '/start',
      name: 'start',
      component: start
    },{
      path: '/start',
      name: 'start',
      component: start
    },
    {
      path: '/shareStart',
      name: 'shareStart',
      component: shareStart
    },
    {
      path: '/start/:userid',
      name: 'start',
      component: start
    },
    {
      path: '/shakeFirst/:userid',
      name: 'shakeFirst',
      component: shakeFirst
    },
    {
      path: '/shakeThird/:userid',
      name: 'shakeThird',
      component: shakeThird
    },
    {
      path: '/shakeSecond/:userid',
      name: 'shakeSecond',
      component: shakeSecond
    },
    {
      path: '/shakeResult/:userid',
      name: 'shakeResult',
      component: shakeResult
    },
    {
      path: '/houseArea/:userid',
      name: 'houseArea',
      component: houseArea
    },
    {
      path: '/readyGo/:userid',
      name: 'readyGo',
      component: readyGo
    },
    {
      path: '/sex/:userid',
      name: 'sex',
      component: sex
    },
    {
      path: '/fingerTips/:userid',
      name: 'fingerTips',
      component: fingerTips
    },
    {
      path: '/clock/:userid',
      name: 'clock',
      component: clock
    },
    {
      path: '/finger/:userid',
      name: 'finger',
      component: finger
    },
    {
      path: '/travel/:userid',
      name: 'travel',
      component: travel
    },
    {
      path: '/faceScore/:userid',
      name: 'faceScore/:userid',
      component: faceScore
    },
    {
      path: '/watch/:userid',
      name: 'watch',
      component: watch
    },
    {
      path: '/shoes/:userid',
      name: 'shoes',
      component: shoes
    },
    {
      path: '/skillStockings/:userid',
      name: 'skillStockings',
      component: skillStockings
    },
    {
      path: '/sleep/:userid',
      name: 'sleep',
      component: sleep
    },
    {
      path: '/toothpaste/:userid',
      name: 'toothpaste',
      component: toothpaste
    },
    {
      path: '/orderFood/:userid',
      name: 'orderFood',
      component: orderFood
    },
    {
      path: '/camera/:userid',
      name: 'camera',
      component: camera
    },
    {
      path: '/hairStyle/:userid',
      name: 'hairStyle',
      component: hairStyle
    },
    {
      path: '/unbear/:userid',
      name: 'unbear',
      component: unbear
    },
    {
      path: '/knowMan/:userid',
      name: 'knowMan',
      component: knowMan
    },
    {
      path: '/mustHave/:userid',
      name: 'mustHave',
      component: mustHave
    },
    {
      path: '/try/:userid',
      name: 'try',
      component: trydo
    },
    {
      path: '/dosome/:userid',
      name: 'dosome',
      component: dosome
    },
    {
      path: '/sport/:userid',
      name: 'sport',
      component: sport
    },
    {
      path: '/sportW/:userid',
      name: 'sportW/:userid',
      component: sportW
    },
    {
      path: '/choiceColor/:userid',
      name: 'choiceColor',
      component: choiceColor
    },
    {
      path: '/choiceDraw/:userid',
      name: 'choiceDraw',
      component: choiceDraw
    },
    {
      path: '/choicePic/:userid',
      name: 'choicePic',
      component: choicePic
    },
    {
      path: '/result/:userid',
      name: 'result',
      component: result
    },
      {
      path: '/charactsResult/:userid',
      name: 'charactsResult',
      component: charactsResult
    },
    {
      path: '/result/:userid/shareResult',
      name: 'share',
      component: result
    },
    {
      path: '/shareResult/:userid',
      name: 'shareResult',
      component: result
    },
    {
      path: '/datePick/:userid',
      name: 'datePick',
      component: datePick
    },
    {
      path: '/likeMiddle/:userid',
      name: 'likeMiddle',
      component: likeMiddle
    },
    {
      path: '/likeStyle/:userid',
      name: 'likeStyle',
      component: likeStyle
    }
       
  ]
})
