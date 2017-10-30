import Vue from 'vue'
import Router from 'vue-router'
//进入测试判断
const start = () => import(/* webpackChunkName: "group-shakeSmart" */ '@/views/characts/start')
const shareStart = () => import(/* webpackChunkName: "group-shakeSmart" */ '@/views/testResult/shareStart')
//抖机灵
const shakeFirst = () => import(/* webpackChunkName: "group-shakeSmart" */ '@/views/shakeSmart/shakeFirst')
const shakeSecond = () => import(/* webpackChunkName: "group-shakeSmart" */ '@/views/shakeSmart/shakeSecond')
const shakeThird = () => import(/* webpackChunkName: "group-shakeSmart" */ '@/views/shakeSmart/shakeThird')
const shakeResult = () => import(/* webpackChunkName: "group-shakeSmart" */ '@/views/shakeSmart/result')
//关于我
const datePick = () => import(/* webpackChunkName: "group-characts" */ '@/views/aboutMe/datePick')
const houseArea = () => import(/* webpackChunkName: "group-characts" */'@/views/aboutMe/houseArea')
const readyGo = () => import(/* webpackChunkName: "group-characts" */'@/views/aboutMe/readyGo')
// 性格测试
const sex = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/sex')
const fingerTips = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/fingerTips')
const finger = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/finger')
const clock = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/clock')
const travel = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/travel')
const faceScore = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/faceScore')
const watch = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/watch')
const shoes = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/shoes')
const skillStockings = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/skillStockings')
const sleep = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/sleep')
const toothpaste = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/toothpaste')
const orderFood = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/orderFood')
const camera = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/camera')
const hairStyle = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/hairStyle')
const unbear = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/unbear')
const knowMan = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/knowMan')
const mustHave = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/mustHave')
const trydo = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/try')
const dosome = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/dosome')
const sport = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/sport')
const sportW = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/sportW')
const choiceColor = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/choiceColor')
const choiceDraw = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/choiceDraw')
const choicePic = () => import(/* webpackChunkName: "group-characts" */'@/views/characts/choicePic')
const charactsResult = () => import(/* webpackChunkName: "group-result" */'@/views/characts/result')
const likeStyle = () => import(/* webpackChunkName: "group-result" */'@/views/desinerStyle/index')
const likeMiddle = () => import(/* webpackChunkName: "group-result" */'@/views/desinerStyle/result')
const result = () => import(/* webpackChunkName: "group-result" */'@/views/testResult/result')





Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: start
    },
    {
      path: '/start',
      name: 'begin',
      component: start
    },
    {
      path: '/shareStart', //微信分享初始页面
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
