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
import HomeViewMain from '../components/HomeViewMain.vue'
import HomeViewStatistics from '../components/HomeViewStatistics.vue'
import HomeViewFeatures from '../components/HomeViewFeatures.vue'
import HomeViewPricing from '../components/HomeViewPricing.vue'
import HomeViewNetwork from '../components/HomeViewNetwork.vue'
import HomeViewPartners from '../components/HomeViewPartners.vue'
import HomeViewReviews from '../components/HomeViewReviews.vue'
import HomeViewSubscribe from '../components/HomeViewSubscribe.vue'
import TheFooter from '../components/TheFooter.vue'
</script>

<style lang="scss" scoped></style>
