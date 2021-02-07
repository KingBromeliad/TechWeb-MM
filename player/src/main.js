import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "tailwindcss/tailwind.css"
import axios from 'axios'

/*
import VueSocketIOExt from 'vue-socket.io-extended'
import { io } from 'socket.io-client'
const socket = io("http://localhost:3000/", {
    withCredentials: true,
    extraHeaders: {
        "cors-header" : "valid"
    }
})

Vue.use(VueSocketIOExt, socket)
*/
Vue.use(axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
