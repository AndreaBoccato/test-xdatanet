<template>
  <div class="h-100 d-flex flex-column flex-grow-1 p-3">
    <div class="w-100 d-flex mb-3">
      <h2 class="flex-fill">Home</h2>
      <button @click="onLogoutClicked" type="button" class="btn btn-outline-danger">Logout</button>
    </div>

    <div class="list-container w-25">
      <ItemList :items="items" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ItemList from '../components/home/ItemList.vue'
import { Item } from '@/core/models/item.model'
import authService from '@/core/services/authService'

const items = ref<Item[]>([])

async function onLogoutClicked() {
  await authService.logout()
}

items.value = [
  new Item({
    id: '1',
    image: 'https://m.media-amazon.com/images/I/71SqpmN9+wL.jpg',
    title: 'titolo',
    description: 'description',
    tags: [],
  }),
  new Item({
    id: '2',
    image: 'https://m.media-amazon.com/images/I/71SqpmN9+wL.jpg',
    title: 'titolo2',
    description: 'description',
    tags: [],
  }),
  new Item({
    id: '3',
    image: 'https://m.media-amazon.com/images/I/71SqpmN9+wL.jpg',
    title: 'titolo3',
    description: 'description',
    tags: [],
  }),
  new Item({
    id: '4',
    image: 'https://m.media-amazon.com/images/I/71SqpmN9+wL.jpg',
    title: 'titolo4',
    description: 'description',
    tags: [],
  }),
  new Item({
    id: '5',
    image: 'https://m.media-amazon.com/images/I/71SqpmN9+wL.jpg',
    title: 'titolo5',
    description: 'description',
    tags: [],
  }),
]
</script>

<style scoped>
.list-container {
  height: 0;
  display: flex;
  flex-grow: 1;
}
</style>
