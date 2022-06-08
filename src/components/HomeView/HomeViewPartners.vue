<template>
  <div class="max-w-appContainer px-4 lg:px-8 mx-auto">
    <div class="flex flex-wrap">
      <div
        v-for="{id, name, img} in partners"
        :key="id"
        class="w-48 mx-auto lg:w-56 h-16 mb-14 md:mr-14 md:last:mr-0"
      >
        <img :src="img" :alt="name" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const partners = ref([
  {id: '1', name: 'Netflix', img: '/src/assets/images/partners/netflix.png'},
  {id: '2', name: 'Reddit', img: '/src/assets/images/partners/reddit.png'},
  {id: '3', name: 'Amazon', img: '/src/assets/images/partners/amazon.png'},
  {id: '4', name: 'Discord', img: '/src/assets/images/partners/discord.png'},
  {id: '5', name: 'Spotify', img: '/src/assets/images/partners/spotify.png'},
])
</script>

<style lang="scss" scoped></style>
