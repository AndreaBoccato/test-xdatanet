import authService from '@/core/services/authService'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', component: LoginView },
  {
    path: '/home',
    component: HomeView,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = authService.isLoggedIn.value

  if (to.path === '/login' && isLoggedIn) {
    return next('/home')
  }

  if (to.meta.requiresAuth && !isLoggedIn) {
    return next('/login')
  }

  next()
})

export default router
