<template>
  <img
    class="rounded-circle object-fit-cover"
    :src="item.image"
    :style="{ width: size + 'px', height: size + 'px', aspectRatio: '1' }"
  />
</template>

<script setup lang="ts">
import { Item } from '@/core/models/item.model'

const { item, size } = defineProps<{ item: Item; size: number }>()
</script>
