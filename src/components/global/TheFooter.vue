<template>
  <footer class="bg-slate-100">
    <div class="max-w-appContainer pb-24 pt-44 px-4 lg:px-8 mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="w-full md:basis-1/4">
          <img src="/src/assets/images/logo.png" alt="logo" class="mb-5" />
          <p class="mb-8">
            <strong>LaslesVPN</strong> is a private virtual network that has unique features and has
            high security.
          </p>
          <div class="flex items-center mb-8">
            <a v-for="{id, name, url, image} in social" :key="id" :href="url">
              <img :src="image" :alt="name" class="w-full object-cover" />
            </a>
          </div>
          <p class="hidden md:inline-block">©2020LaslesVPN</p>
        </div>
        <div class="w-full mb-10 md:mb-0 md:basis-5/12 flex flex-col sm:flex-row justify-between">
          <div class="mb-7 sm:mb-0">
            <h3>Product</h3>
            <ul>
              <li v-for="{id, text, path} in product" :key="id">
                <a :href="path">{{ text }}</a>
              </li>
            </ul>
          </div>
          <div class="mb-7 sm:mb-0">
            <h3>Engage</h3>
            <ul>
              <li v-for="{id, text, path} in engage" :key="id">
                <a :href="path">{{ text }}</a>
              </li>
            </ul>
          </div>
          <div class="mb-7 sm:mb-0">
            <h3>Earn Money</h3>
            <ul>
              <li v-for="{id, text, path} in earnMoney" :key="id">
                <a :href="path">{{ text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="inline-block md:hidden">©2020LaslesVPN</p>
    </div>
  </footer>
</template>

<script setup>
import {ref} from 'vue'

const social = ref([
  {id: '1', name: 'Facebook', url: '#', image: '/src/assets/images/social/facebook.png'},
  {id: '2', name: 'Twitter', url: '#', image: '/src/assets/images/social/twitter.png'},
  {id: '3', name: 'Instagram', url: '#', image: '/src/assets/images/social/instagram.png'},
])

const product = ref([
  {id: '1', text: 'Download', path: '#'},
  {id: '2', text: 'Pricing', path: '#'},
  {id: '3', text: 'Locations', path: '#'},
  {id: '4', text: 'Server', path: '#'},
  {id: '5', text: 'Countries', path: '#'},
  {id: '6', text: 'Blog', path: '#'},
])

const engage = ref([
  {id: '1', text: 'LaslesVPN', path: '#'},
  {id: '2', text: 'FAQ', path: '#'},
  {id: '3', text: 'Tutorials', path: '#'},
  {id: '4', text: 'About Us', path: '#'},
  {id: '5', text: 'Privacy Policy', path: '#'},
  {id: '6', text: 'Terms of Service', path: '#'},
])

const earnMoney = ref([
  {id: '1', text: 'Affiliate', path: '#'},
  {id: '2', text: 'Become Partner', path: '#'},
])
</script>

<style lang="postcss" scoped>
h3 {
  @apply mb-5;
}
ul li {
  @apply mb-2 last:mb-0;
}
</style>
