import Vue from 'vue'
import VueRouter from 'vue-router'
import Site from '../views/Site.vue'
import Contact from '../views/Contact.vue'
import ContactSend from '../views/Contact-Send.vue'
import Imprint from '../views/Imprint.vue'
import Prices from '../views/Prices.vue'

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
  {
    path: '/message-success',
    name: 'Contact-Send',
    component: ContactSend
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: Imprint
  },
  {
    path: '/prices',
    name: 'Prices',
    component: Prices
  },
]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

export default router
