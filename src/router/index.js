import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: () => import('@/components/Home'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('@/components/AppIndex'),
        meta: {
          // 需要认证
          requireAuth: true
        }
      },
      {
        path: '/library',
        component: () => import('@/components/library/LibraryIndex'),
        meta: {
          // 需要认证
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/components/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user.username) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else { next() }
})

export default router
