import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './public/axios'
import './public/element'
import './assets/css/public.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
