<template>
  <section class="pt-20 pricing">
    <div class="max-w-appContainer px-4 lg:px-8 mx-auto">
      <div class="mb-14 text-center">
        <h1 class="mb-5">Choose Your Plan</h1>
        <p class="w-2/5 m-auto">
          Let's choose the package that is best for you and explore it happily and cheerfully.
        </p>
      </div>
      <div class="flex justify-between">
        <div
          v-for="{id, name, features, price} in tariffPlans"
          :key="id"
          class="flex items-center flex-col px-20 pt-20 pb-12 border-2 border-slate-300 hover:border-danger transition-all bg-white"
        >
          <img src="/src/assets/images/home-pricing.png" alt="" class="mb-8" />

          <h3 class="mb-8">{{ name }}</h3>

          <ul class="mb-14">
            <li v-for="feature in features" :key="feature" class="flex items-center mb-3 last:mb-0">
              <CheckIcon class="w-4 mr-6 text-success" />
              {{ feature }}
            </li>
          </ul>

          <strong class="mt-auto mb-5 text-2xl text-dark">
            {{ price }}
            <span v-if="price !== 'Free'" class="font-normal text-slate-700">/ mo</span>
          </strong>
          <button
            class="w-full py-3 border-2 rounded-3xl border-danger text-danger font-bold hover:bg-danger hover:text-white transition-all hover:shadow-2xl hover:shadow-danger"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue'
import {CheckIcon} from '@heroicons/vue/solid'

const tariffPlans = ref([
  {
    id: '1',
    name: 'Free Plan',
    features: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'No Traffic Logs',
      'Works on All Devices',
    ],
    price: 'Free',
  },
  {
    id: '2',
    name: 'Standard Plan',
    features: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'Yes Traffic Logs',
      'Works on All Devices',
      'Connect Anyware',
    ],
    price: '$9',
  },
  {
    id: '3',
    name: 'Premium Plan',
    features: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'Yes Traffic Logs',
      'Works on All Devices',
      'Connect Anyware',
      'Get New Features',
    ],
    price: '$12',
  },
])
</script>

<style lang="postcss" scoped>
.pricing {
  @apply relative;
}

.pricing::before,
.pricing::after {
  content: '';
  @apply absolute left-0 right-0 -z-10 w-full bg-slate-100;
}

.pricing::before {
  @apply top-0 bg-opacity-30;
  height: 80%;
}

.pricing::after {
  @apply bottom-0 bg-opacity-20;
  height: 20%;
}
</style>
