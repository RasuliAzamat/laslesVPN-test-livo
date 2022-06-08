<template>
  <div class="grid grid-cols-3 grid-rows-1 py-10 rounded-xl shadow-xl">
    <div class="flex justify-center py-10 border-r border-slate-200">
      <span class="mr-9 px-5 py-4 bg-red-100 rounded-full">
        <UserIcon class="w-5 text-danger" />
      </span>
      <span class="text-xl">
        <strong class="block text-2xl text-dark">90+</strong>
        Users
      </span>
    </div>
    <div class="flex justify-center py-10 border-r border-slate-200">
      <span class="mr-9 px-5 py-4 bg-red-100 rounded-full">
        <LocationMarkerIcon class="w-5 text-danger" />
      </span>
      <span class="text-xl">
        <strong class="block text-2xl text-dark">30+</strong>
        Locations
      </span>
    </div>
    <div class="flex justify-center py-10">
      <span class="mr-9 px-5 py-4 bg-red-100 rounded-full">
        <ServerIcon class="w-5 text-danger" />
      </span>
      <span class="text-xl">
        <strong class="block text-2xl text-dark">50+</strong>
        Servers
      </span>
    </div>
  </div>
</template>

<script setup>
import {UserIcon, LocationMarkerIcon, ServerIcon} from '@heroicons/vue/solid'
</script>

<style lang="scss" scoped></style>
