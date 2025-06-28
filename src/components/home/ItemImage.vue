<template>
  <img
    class="rounded-circle"
    :src="item.image"
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>

<script setup lang="ts">
import { Item } from '@/core/models/item.model'

const { item, size } = defineProps<{ item: Item; size: number }>()
</script>
