import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: () => import( '../views/Home') },
  // { path: '/login', name: 'Login', component: () => import('../views/Login') },
  { path: '/user/:id', name: 'User', component: () => import( '../views/User') },
  { path: '/user/:id/new-quiz', name: 'NewQuiz', component: () => import( '../views/NewQuiz.vue') },
  { path: '/quiz/:id', name: 'Quiz', component: () => import( '../views/Quiz') },
  { path: '/about', name: 'About', // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  }
]

const router = new VueRouter({
  routes
})

export default router
