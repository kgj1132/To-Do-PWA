import Vue from 'vue'
import App from './App.vue'
import { store } from './store.js'

const vm= new Vue({
  el: '#app',
  // store:store,
  store,
  render: h => h(App)
})
