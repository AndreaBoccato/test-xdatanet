<template>
  <div
    class="h-100 w-100 d-flex align-items-center justify-content-center"
    v-if="!selectedItem.value"
  >
    No item selected
  </div>

  <div class="h-100 w-100 px-3" v-else>
    <div class="h-100 d-flex gap-3">
      <ItemImage :item="selectedItem.value" :size="120" />

      <div class="d-flex flex-column gap-3">
        <h1>{{ selectedItem.value.title }}</h1>

        <div class="d-flex flex-wrap gap-3">
          <div
            class="d-flex align-items-center justify-content-center rounded-pill bg-primary p-2"
            style="min-width: 5rem"
            v-for="tag of selectedItem.value.tags"
          >
            {{ tag }}
          </div>
        </div>

        <div class="description-container overflow-y-auto">
          {{ selectedItem.value.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import itemService from '@/core/services/itemService'
import ItemImage from './ItemImage.vue'
import { computed } from 'vue'

const selectedItem = computed(() => {
  return itemService.selectedItem
})
</script>

<style scoped>
.description-container {
  display: flex;
  height: 0;
  flex-grow: 1;
}
</style>
