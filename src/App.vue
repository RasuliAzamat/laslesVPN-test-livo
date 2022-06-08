<template>
  <div>
    <TheHeader class="mb-10 md:mb-16 lg:mb-20" />

    <main>
      <HomeView />
    </main>
  </div>
</template>

<script setup>
import TheHeader from './components/global/TheHeader.vue'
import HomeView from './views/HomeView.vue'
</script>

<style lang="scss" scoped></style>
