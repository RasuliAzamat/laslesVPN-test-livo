<template>
  <header class="max-w-appContainer px-4 lg:px-8 mx-auto">
    <nav class="flex items-center justify-between pt-11">
      <a href="/">
        <img src="/src/assets/images/logo.png" alt="logo" />
      </a>

      <ul class="hidden lg:flex">
        <li v-for="{id, name, path} in navLinks" :key="id" class="mr-10 last:mr-0">
          <a :href="path">
            {{ name }}
          </a>
        </li>
      </ul>

      <div class="hidden lg:inline-block text-dark">
        <button class="font-medium mr-7">Sign in</button>
        <button class="font-medium px-11 py-3 border rounded-3xl border-danger text-danger">
          Sign up
        </button>
      </div>

      <div class="inline-block lg:hidden cursor-pointer">
        <MenuIcon class="w-8 text-dark" @click="isActive = !isActive" />
      </div>

      <div
        :class="[
          '  fixed top-24 right-0 bottom-0 z-30 flex flex-col items-center justify-center text-center bg-white transition-all',
          {
            'left-0': isActive,
            'left-full': !isActive,
            visible: isActive,
            invisible: !isActive,
          },
        ]"
      >
        <ul class="mb-10">
          <li v-for="{id, name, path} in navLinks" :key="id" class="text-2xl mb-5 last:mb-0">
            <a :href="path">
              {{ name }}
            </a>
          </li>
        </ul>
        <div class="text-xl text-dark">
          <button class="font-medium mr-7">Sign in</button>
          <button class="font-medium px-11 py-3 border rounded-3xl border-danger text-danger">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {MenuIcon} from '@heroicons/vue/solid'
import {ref} from 'vue'

const navLinks = ref([
  {id: '1', name: 'About', path: '/about'},
  {id: '2', name: 'Features', path: '/features'},
  {id: '3', name: 'Pricing', path: '/pricing'},
  {id: '4', name: 'Testimonials', path: '/testimonials'},
  {id: '5', name: 'Help', path: '/help'},
])

const isActive = ref(false)
</script>

<style lang="scss" scoped></style>
