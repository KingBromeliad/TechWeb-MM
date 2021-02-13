import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Storia from '../views/Storia.vue'
import Quiz from '../views/Quiz.vue'
import FinalEval from '../views/FinalEval.vue'
//--game pages--//
import Start from '../views/game/Start.vue'
import PathGame from '../views/game/PathGame.vue'
import Question from '../views/game/Question.vue'
import Game from '../views/Game.vue'
import Video from '../views/game/Video.vue'
import ImageGame from '../views//game/ImageGame.vue'
import QrCodeGame from '../views/game/QrCodeGame.vue'
import StartAccessible from '../views/game/StartAccessible.vue'


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
    path: '/startAccessible',
    name: 'StartAccessible',
    component: StartAccessible
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
  },
  {
    path: '/qrCodeGame',
    name: 'QrCodeGame',
    component: QrCodeGame
  }
]

const router = new VueRouter({
  routes
})

export default router
