import Vue from 'vue'
import Axios from 'axios'

Axios.defaults.baseURL = '/api'
Vue.prototype.$axios = Axios
