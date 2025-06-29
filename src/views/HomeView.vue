<template>
  <div class="h-100 d-flex flex-column flex-grow-1 p-3">
    <div class="w-100 d-flex mb-3">
      <h2 class="flex-fill">Home</h2>
      <button @click="onLogoutClicked" type="button" class="btn btn-outline-danger">Logout</button>
    </div>

    <div
      class="h-100 d-flex justify-content-center align-items-center"
      v-if="requestStatus == 'LOADING'"
    >
      <div class="spinner-border" style="width: 3rem; height: 3rem" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div
      class="h-100 d-flex justify-content-center align-items-center"
      v-else-if="requestStatus == 'ERROR'"
    >
      Error loading items
    </div>

    <div v-else class="w-100 h-100 d-flex gap-3">
      <div class="h-100" style="min-width: 25%">
        <ItemList :items="items" />
      </div>

      <ItemDetail />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ItemList from '@/components/home/ItemList.vue'
import { Item } from '@/core/models/item.model'
import authService from '@/core/services/authService'
import { useToast } from 'vue-toastification'
import { RequestStatus } from '@/core/enums'
import itemService from '@/core/services/itemService'
import ItemDetail from '@/components/home/ItemDetail.vue'

const items = ref<Item[]>([])
const requestStatus = ref<RequestStatus>(RequestStatus.LOADING)
const toast = useToast()

onMounted(() => requestItems())

async function onLogoutClicked() {
  try {
    await authService.logout()
  } catch (err) {
    console.error('onLogoutClicked', err)
    toast.error('Error during logout')
  }
}

async function requestItems(): Promise<void> {
  try {
    items.value = await itemService.list()
    requestStatus.value = RequestStatus.SUCCESS
  } catch (err) {
    console.error('requestItems', err)
    requestStatus.value = RequestStatus.ERROR
  }
}
</script>

<style scoped>
.list-container {
  height: 0;
  display: flex;
  flex-grow: 1;
}
</style>
