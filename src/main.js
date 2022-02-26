import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import VueI18n from 'vue-i18n'
import de from './i18n/de'
import en from './i18n/en'


Vue.config.productionTip = false

Vue.use(VueMeta);
Vue.use(VueI18n);

// i18n
const i18n = new VueI18n({
  locale: 'de',
  fallbackLocale: 'de',
  messages: {
    'de': de,
    'en': en,
  }, 
})



new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
