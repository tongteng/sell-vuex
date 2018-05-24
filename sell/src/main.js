// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import './css/base.less'
import $ from 'jquery'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// Vue.directive('highlight', (el) => {
//   let blocks = el.querySelectorAll('pre code')
//   blocks.forEach((block) => {
//       hljs.highlightBlock(block)
//   })
// })
