<template>
  <div class="bg-dark text-white vh-100" data-bs-theme="dark">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>
