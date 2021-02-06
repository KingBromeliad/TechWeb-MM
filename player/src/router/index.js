import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Storia from '../views/Storia.vue'
import Quiz from '../views/Quiz.vue'
import FinalEval from '../views/FinalEval.vue'
import About from '../views/About.vue'
//--game pages--//
import Info from '../views/game/Info.vue'
import Start from '../views/game/Start.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/storia',
    name: 'Storia',
    component: Storia
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  },
  {
    path: '/final',
    name: 'FinalEval',
    component: FinalEval
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/',
    name: 'Start',
    component: Start
  }
]

const router = new VueRouter({
  routes
})

export default router
