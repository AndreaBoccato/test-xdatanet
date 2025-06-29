<template>
  <div
    @click="onItemClicked"
    :class="{ 'bg-secondary': isItemSelected }"
    class="w-100 d-flex align-items-center gap-3 p-3"
    style="cursor: pointer"
  >
    <ItemImage :item="item!" :size="50" />
    <span class="fs-5">{{ item!.title }}</span>
  </div>
</template>

<script setup lang="ts">
import { Item } from '@/core/models/item.model'
import itemService from '@/core/services/itemService'
import { computed } from 'vue'
import ItemImage from './ItemImage.vue'

const { item } = defineProps({
  item: Item,
})

const emit = defineEmits<{
  (e: 'onItemClicked'): void
}>()

const isItemSelected = computed(() => {
  return itemService.selectedItem.value?.id === item!.id
})

function onItemClicked(): void {
  itemService.selectedItem.value = isItemSelected.value ? null : item!
  emit('onItemClicked')
}
</script>
