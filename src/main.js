import Vue from 'vue'
import App from './App.vue'
//Dependencias
import JQuery from 'jquery/dist/jquery.min.js'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import SweetAlert from 'sweetalert/dist/sweetalert.min.js'
import PushNotification from 'push.js/bin/push.min.js'
import babelPresetEnv from 'babel-preset-env'
import babelPresetStage from 'babel-preset-stage-2'

//Importar Modulos Front-End
import Titulo from './Titulo.vue'
import Table from './Table.vue'
import Footer from './Footer.vue'
Vue.component('titulo',Titulo);
Vue.component('vueTable',Table);
Vue.component('vueFooter',Footer);
new Vue({
  el: '#app',
  render: h => h(App)
})
