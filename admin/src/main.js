import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSocketIOExt from 'vue-socket.io-extended'
import { io } from 'socket.io-client'
import "tailwindcss/tailwind.css"
import axios from 'axios'
import VueAxios from 'vue-axios'

const socket = io("http://localhost:3000/", {
    extraHeaders: {
        "cors-header" : "valid"
    }
})

Vue.use(VueSocketIOExt, socket)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  provide: {
    logged: false
  },
  router,
  render: h => h(App)
}).$mount('#app')
