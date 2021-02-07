import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/creation',
    name: 'Creation',
    component: () => import('../views/Creation.vue'),
  },
  {
    path: '/creationsgame',
    name: 'Creationsgame',
    component: () => import('../views/Creationsgame.vue'),
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('../views/Games.vue'),
  },
  {
  path: '/gamequiz',
  name: 'Gamequiz',
  component: () => import('../views/Gamequiz.vue'),
},
{
path: '/team',
name: 'Team',
component: () => import('../views/Team.vue'),
},
  {
    path: '/creationquiz',
    name: 'Creationquiz',
    component: () => import('../views/Creationquiz.vue')
  },
  {
    path: '/creationstory',
    name: 'Creationstory',
    component: () => import('../views/Creationstory.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router