<template>
  <div class="min-vh-100 d-flex flex-column flex-grow-1 align-items-center justify-content-center">
    <LoginForm
      :isSubmitting="isSubmitting"
      @onFormSubmitted="handleLogin"
      @onLoginWithGoogle="handleLoginWithGoogle"
    />
  </div>
</template>

<script setup lang="ts">
import authService from '@/core/services/authService'
import LoginForm from '../components/login/LoginForm.vue'
import type { LoginData } from '@/core/types'
import router from '@/router'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const isSubmitting = ref(false)
const toast = useToast()

async function handleLogin(loginData: LoginData): Promise<void> {
  try {
    isSubmitting.value = true
    if (!loginData.email || !loginData.password) {
      throw new Error('Empty email or password')
    }

    await authService.loginWithEmailAndPassword(loginData.email, loginData.password)
    router.replace('Home')
  } catch (err) {
    console.error('handleLogin', err)
    toast.error('Error during login')
  } finally {
    isSubmitting.value = false
  }
}

async function handleLoginWithGoogle(): Promise<void> {
  try {
    isSubmitting.value = true
    await authService.loginWithGoogle()
    router.replace('Home')
  } catch (err) {
    console.error('handleLoginWithGoogle', err)
    toast.error('Error during login with google')
  } finally {
    isSubmitting.value = false
  }
}
</script>
