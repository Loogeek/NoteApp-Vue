import Vue from 'vue'
import App from './components/App.vue'
import store from './vuex/store'
import marked from 'marked'

Vue.filter('marked', marked)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
  store
})
