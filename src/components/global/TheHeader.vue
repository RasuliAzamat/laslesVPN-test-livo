<template>
  <header class="max-w-appContainer px-4 lg:px-8 mx-auto mb-20">
    <nav class="flex items-center justify-between pt-11">
      <a href="/">
        <img src="/src/assets/images/logo.png" alt="logo" />
      </a>

      <ul class="flex">
        <li v-for="{id, name, path} in navLinks" :key="id" class="mr-10 last:mr-0">
          <a :href="path">
            {{ name }}
          </a>
        </li>
      </ul>

      <div class="text-dark">
        <button class="font-medium mr-7">Sign in</button>
        <button class="font-medium px-11 py-3 border rounded-3xl border-danger text-danger">
          Sign up
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {ref} from 'vue'

const navLinks = ref([
  {id: '1', name: 'About', path: '/about'},
  {id: '2', name: 'Features', path: '/features'},
  {id: '3', name: 'Pricing', path: '/pricing'},
  {id: '4', name: 'Testimonials', path: '/testimonials'},
  {id: '5', name: 'Help', path: '/help'},
])
</script>

<style lang="scss" scoped></style>
