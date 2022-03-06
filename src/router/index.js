import Vue from 'vue'
import VueRouter from 'vue-router'
import Site from '../views/Site.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Site',
    component: Site
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

export default router
