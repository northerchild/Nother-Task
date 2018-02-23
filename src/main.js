import Vue from 'vue'
import App from './App.vue'
import JQuery from 'jquery/dist/jquery.min.js'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import SweetAlert from 'sweetalert/dist/sweetalert.min.js'
let Particles = require('particles.js/particles.js')
import PushNotification from 'push.js/bin/push.min.js'

new Vue({
  el: '#app',
  render: h => h(App)
})
