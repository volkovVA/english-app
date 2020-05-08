import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Books from '@/views/Books.vue'
import Words from '@/views/Words.vue'
import Signin from '@/views/Signin.vue'
import Signup from '@/views/Signup.vue'
import Profile from '@/views/Profile.vue'
import AuthGuard from './auth-guard'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/books',
    name: 'books',
    component: Books
  },
  {
    path: '/words',
    name: 'words',
    component: Words
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: AuthGuard
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
