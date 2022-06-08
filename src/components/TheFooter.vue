<template>
  <footer class="bg-slate-100">
    <div class="max-w-appContainer pb-24 pt-44 px-4 lg:px-8 mx-auto">
      <div class="flex items-center justify-between">
        <div class="basis-1/4">
          <img src="../assets/images/logo.png" alt="logo" class="mb-5" />
          <p class="mb-8">
            <strong>LaslesVPN</strong> is a private virtual network that has unique features and has
            high security.
          </p>
          <div class="flex items-center mb-8">
            <a
              v-for="{id, name, url, image} in social"
              :key="id"
              :href="url"
              class="mr-5 last:mr-0"
            >
              <img :src="image" :alt="name" />
            </a>
          </div>
          <p>©2020LaslesVPN</p>
        </div>
        <div class="basis-5/12 flex justify-between">
          <div>
            <h3>Product</h3>
            <ul>
              <li v-for="{id, text, path} in product" :key="id">
                <a :href="path">{{ text }}</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Engage</h3>
            <ul>
              <li v-for="{id, text, path} in engage" :key="id">
                <a :href="path">{{ text }}</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Earn Money</h3>
            <ul>
              <li v-for="{id, text, path} in earnMoney" :key="id">
                <a :href="path">{{ text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {ref} from '@vue/reactivity'

const social = ref([
  {id: '1', name: 'Facebook', url: '#', image: '@/assets/images/facebook.png'},
  {id: '2', name: 'Twitter', url: '#', image: '@/assets/images/twitter.png'},
  {id: '3', name: 'Instagram', url: '#', image: '@/assets/images/instagram.png'},
])

const product = ref([
  {id: '1', text: 'Download', path: ''},
  {id: '2', text: 'Pricing', path: ''},
  {id: '3', text: 'Locations', path: ''},
  {id: '4', text: 'Server', path: ''},
  {id: '5', text: 'Countries', path: ''},
  {id: '6', text: 'Blog', path: ''},
])

const engage = ref([
  {id: '1', text: 'LaslesVPN', path: ''},
  {id: '2', text: 'FAQ', path: ''},
  {id: '3', text: 'Tutorials', path: ''},
  {id: '4', text: 'About Us', path: ''},
  {id: '5', text: 'Privacy Policy', path: ''},
  {id: '6', text: 'Terms of Service', path: ''},
])

const earnMoney = ref([
  {id: '1', text: 'Affiliate', path: ''},
  {id: '2', text: 'Become Partner', path: ''},
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
