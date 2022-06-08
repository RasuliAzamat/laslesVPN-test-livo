<template>
  <div class="max-w-appContainer px-4 lg:px-8 mx-auto flex">
    <div v-for="{id, name, img} in partners" :key="id" class="flex-1 mr-14 last:mr-0">
      <img :src="img" :alt="name" class="w-full object-cover" />
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const partners = ref([
  {id: '1', name: 'Netflix', img: '../assets/images/netflix.png'},
  {id: '2', name: 'Reddit', img: '../assets/images/reddit.png'},
  {id: '3', name: 'Amazon', img: '../assets/images/amazon.png'},
  {id: '4', name: 'Discord', img: '../assets/images/discord.png'},
  {id: '5', name: 'Spotify', img: '../assets/images/spotify.png'},
])
</script>

<style lang="scss" scoped></style>
