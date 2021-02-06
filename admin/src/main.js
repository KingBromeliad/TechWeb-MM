import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSocketIOExt from 'vue-socket.io-extended'
import { io } from 'socket.io-client'
import "tailwindcss/tailwind.css"

const socket = io("http://localhost:3001/", {
    withCredentials: true,
    extraHeaders: {
        "cors-header" : "valid"
    }
})

Vue.use(VueSocketIOExt, socket)

Vue.config.productionTip = false

new Vue({
  provide: {
    logged: false
  },
  router,
  render: h => h(App)
}).$mount('#app')
