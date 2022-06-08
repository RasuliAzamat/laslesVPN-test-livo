<template>
  <div>
    <HomeViewMain class="mb-36" />
    <HomeViewStatistics class="mb-32" />
    <HomeViewFeatures class="mb-28" />
    <HomeViewPricing class="pb-72" />
    <HomeViewNetwork class="mb-28" />
    <HomeViewPartners class="mb-32" />
    <HomeViewReviews />
    <div class="relative flex items-center flex-col">
      <HomeViewSubscribe class="absolute" />
      <TheFooter class="absolute -z-10 w-full mt-40" />
    </div>
  </div>
</template>

<script setup>
import HomeViewMain from '../components/HomeView/HomeViewMain.vue'
import HomeViewStatistics from '../components/HomeView/HomeViewStatistics.vue'
import HomeViewFeatures from '../components/HomeView/HomeViewFeatures.vue'
import HomeViewPricing from '../components/HomeView/HomeViewPricing.vue'
import HomeViewNetwork from '../components/HomeView/HomeViewNetwork.vue'
import HomeViewPartners from '../components/HomeView/HomeViewPartners.vue'
import HomeViewReviews from '../components/HomeView/HomeViewReviews.vue'
import HomeViewSubscribe from '../components/HomeView/HomeViewSubscribe.vue'
import TheFooter from '../components/global/TheFooter.vue'
</script>

<style lang="scss" scoped></style>
