// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/css/base.css'

import VueJsonp from 'vue-jsonp'
import vueBridgeWebview from 'vue-bridge-webview'
import store from './store'
import fastclick from 'fastclick'



Vue.use(VueJsonp)
Vue.use(vueBridgeWebview)

import { Lazyload } from 'mint-ui';
import { DatetimePicker } from 'mint-ui';

//npm添加 李发全添加
import { Picker } from 'mint-ui';
Vue.component(Picker.name, Picker);

fastclick.attach(document.body)
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.use(Lazyload);
Vue.config.productionTip = false
import 'mint-ui/lib/style.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
