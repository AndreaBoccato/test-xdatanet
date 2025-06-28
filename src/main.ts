import './assets/main.css'

import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import authService from './core/services/authService'

const app = createApp(App)

authService.firebaseAuth.authStateReady().then(() => {
  app.use(router).use(Toast).mount('#app')
})

watch(authService.isLoggedIn, (newVal, oldVal) => {
  if (!newVal) {
    router.replace('Login')
  }
})
