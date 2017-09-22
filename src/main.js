// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/base.css'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
import { Lazyload } from 'mint-ui';
import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.use(Lazyload);
Vue.config.productionTip = false
import 'mint-ui/lib/style.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
