import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MainBeforeLoginView from '../views/MainBeforeLoginView.vue'
import MainAfterLoginView from '../views/MainAfterLoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/MainBeforeLogin',
    name: 'MainBeforeLogin',
    component: MainBeforeLoginView
  },
  {
    path: '/MainAfterLogin',
    name: 'MainAfterLogin',
    component: MainAfterLoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
