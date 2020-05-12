// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import ElementUI from '../node_modules/element-ui';
import Vant from '../node_modules/vant'
import 'element-ui/lib/theme-chalk/index.css';
import animate from 'animate.css'
import 'bootstrap3/dist/css/bootstrap.css'
import 'bootstrap3/dist/js/bootstrap'

Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.use(Vant)
Vue.use(animate)
Vue.config.productionTip = false
Vue.prototype.$http=axios
//定义标识符
const  i18n = new VueI18n ({
  locale : 'zh-CN',
  'zh-CN' : require('./language/zh'), //中文语言包
  'en-US' : require('./language/en'), //英文语言包
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
