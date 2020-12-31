import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/components/Login')
  },
  {
    path: '/index',
    component: () => import('@/components/AppIndex'),
    meta: {
      // 需要认证
      requireAuth: true
    },
    shit: 'shit'
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user.username) {
      next()
    } else {
      next({
        path: 'login',
        query: { redirect: '未登陆' }
      })
    }
  } else { next() }
})

export default router
