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
import PathGame from '../views/game/PathGame.vue'
import Question from '../views/game/Question.vue'
import Game from '../views/Game.vue'
import Video from '../views/game/Video.vue'
import ImageGame from '../views/ImageGame.vue'

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
    path: '/',
    name: 'Info',
    component: Info
  },
  {
    path: '/start',
    name: 'Start',
    component: Start
  },
  {
    path: '/pathgame',
    name: 'PathGame',
    component: PathGame
  },
  {
    path: '/question',
    name: 'Question',
    component: Question
  },
  {
    path: '/game',
    name: 'Tris',
    component: Game
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/imageGame',
    name: 'ImageGame',
    component: ImageGame
  }
]

const router = new VueRouter({
  routes
})

export default router
