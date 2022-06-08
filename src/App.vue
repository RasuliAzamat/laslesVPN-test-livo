<template>
  <div class="max-w-appContainer px-4 lg:px-8 mx-auto">
    <TheHeader />

    <main>
      <HomeView />
    </main>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import HomeView from './views/HomeView.vue'

export default {
  components: {TheHeader, HomeView},

  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
