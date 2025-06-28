<template>
  <div
    class="card bg-body-secondary d-flex flex-column align-items-center justify-content-center w-50 p-3 gap-3"
    style="min-height: 18rem; max-width: 30rem"
  >
    <form
      class="w-100 d-flex flex-column align-items-center justify-content-center gap-3"
      @submit.prevent="onFormSubmitted"
    >
      <div class="w-100">
        <label for="emailInput" class="form-label">Email address</label>
        <input v-model="email" type="email" class="form-control" id="emailInput" />
      </div>

      <div class="w-100">
        <label for="passwordInput" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="passwordInput" />
      </div>

      <button @disabled="isSubmitting" type="submit" class="btn btn-primary login-button">
        Login
      </button>
    </form>

    <div class="w-100 d-flex align-items-center gap-3">
      <hr class="flex-fill" />
      <span>Or</span>
      <hr class="flex-fill" />
    </div>

    <button
      @disabled="isSubmitting"
      @click="onLoginWithGoogle"
      type="button"
      class="btn btn-light login-button"
    >
      Login with google
    </button>
  </div>
</template>

<script setup lang="ts">
import { LoginData } from '@/core/types'
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const { isSubmitting = false } = defineProps<{
  isSubmitting: boolean
}>()

const emit = defineEmits<{
  (e: 'onFormSubmitted', data: LoginData): void
  (e: 'onLoginWithGoogle'): void
}>()

function onFormSubmitted() {
  emit('onFormSubmitted', { email: email.value, password: password.value })
}

function onLoginWithGoogle() {
  emit('onLoginWithGoogle')
}
</script>

<style>
.login-button {
  width: 50%;
  min-width: 10rem;
}
</style>
