<template>
  <div class="max-w-appContainer px-4 lg:px-8 mx-auto">
    <div class="flex flex-wrap">
      <div
        v-for="{id, name, img} in partners"
        :key="id"
        class="w-48 lg:w-56 h-16 mx-auto mb-14 md:mr-14 md:last:mr-0"
      >
        <img :src="img" :alt="name" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const partners = ref([
  {id: '1', name: 'Netflix', img: '/images/partners/netflix.png'},
  {id: '2', name: 'Reddit', img: '/images/partners/reddit.png'},
  {id: '3', name: 'Amazon', img: '/images/partners/amazon.png'},
  {id: '4', name: 'Discord', img: '/images/partners/discord.png'},
  {id: '5', name: 'Spotify', img: '/images/partners/spotify.png'},
])
</script>

<style lang="scss" scoped></style>
