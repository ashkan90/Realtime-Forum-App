import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/views/Login'
import Signup from '../components/views/Signup'
import Forum from '../components/views/Forum'
import Logout from '../components/views/Logout'
import Read from '../components/views/Read'
import Ask from '../components/views/Ask'
import Category from '../components/views/Category'


const routes = [
  { path: '/login', component: Login },
  { path: '/logout', component: Logout },
  { path: '/signup', component: Signup},
  { path: '/forum', component: Forum, name: 'forum', props: true},
  { path: '/ask', component: Ask },
  { path: '/category', component: Category },
  { path: '/question/:slug', component: Read, name: 'read' },

]

const router = new VueRouter({
  routes, // short for `routes: routes`
  hashbang: false,
  mode: 'history'
})

export default router;