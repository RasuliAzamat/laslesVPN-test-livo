<template>
  <section id="features" class="max-w-appContainer px-4 lg:px-8 mx-auto">
    <div class="flex">
      <div class="hidden md:inline-block basis-2/5">
        <img src="/src/assets/images/home-features.png" alt="" class="w-full object-cover" />
      </div>
      <div class="w-full md:basis-1/2">
        <h1 class="mb-5 md:mb-14">We Provide Many Features You Can Use</h1>
        <div class="ml-0 md:ml-40">
          <p class="mb-5">
            You can explore the features that we provide with fun and have their own functions each
            feature.
          </p>
          <ul>
            <li
              v-for="{id, name} in featuresList"
              :key="id"
              class="flex items-center mb-4 last:mb-0"
            >
              <span class="inline-block p-1 mr-3 rounded-full bg-success">
                <CheckIcon class="w-5 text-white" />
              </span>
              {{ name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {CheckIcon} from '@heroicons/vue/solid'
import {ref} from 'vue'

const featuresList = ref([
  {id: '1', name: 'Powerfull online protection.'},
  {id: '2', name: 'Internet without borders.'},
  {id: '3', name: 'Supercharged VPN'},
  {id: '4', name: 'No specific time limits.'},
])
</script>

<style lang="scss" scoped></style>
