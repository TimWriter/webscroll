import Vue from 'vue'
import VueRouter from 'vue-router'
import Site from '../views/Site.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Site',
    component: Site
  },
]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

export default router
