<template>
  <div class="card scroll-container bg-body-secondary h-100 w-100">
    <div v-if="!items?.length" class="h-100 d-flex justify-content-center align-items-center">
      <span>No item found</span>
    </div>

    <div
      v-else
      v-for="(item, index) in items"
      :key="item.id"
      :class="{ 'border-bottom': index !== items.length - 1 }"
    >
      <ItemRow :item="item" @onItemClicked="onItemClicked(item)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Item } from '@/core/models/item.model'
import { PropType } from 'vue'
import ItemRow from './ItemRow.vue'

const { items } = defineProps({
  items: Array as PropType<Item[]>,
})

function onItemClicked(item: Item): void {
  console.log('+++++++++', item)
}
</script>

<style scoped>
.scroll-container {
  max-height: 100%;
  overflow-y: auto;
}
</style>
