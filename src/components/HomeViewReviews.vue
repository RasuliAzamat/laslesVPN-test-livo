<template>
  <section class="max-w-appContainer px-4 lg:px-8 mx-auto">
    <div class="w-2/5 m-auto mb-16 text-center">
      <h1 class="mb-5">Trusted by Thousands of Happy Customer</h1>
      <p>
        These are the stories of our customers who have joined us with great pleasure when using
        this crazy feature.
      </p>
    </div>
    <swiper
      :modules="modules"
      :navigation="true"
      :pagination="true"
      :slidesPerView="2.5"
      :spaceBetween="50"
      class="reviews-slider"
    >
      <swiper-slide
        v-for="{id, author, avatar, from, text, rating} in reviews"
        :key="id"
        class="flex flex-col h-56 p-8 border-2 rounded-xl border-slate-200"
      >
        <div class="w-full flex items-center justify-between mb-5">
          <div class="flex items-center">
            <span class="inline-block w-12 mr-5">
              <img :src="avatar" :alt="author" class="w-full object-cover" />
            </span>
            <span class="flex flex-col items-start">
              <strong>{{ author }}</strong>
              <small>{{ from }}</small>
            </span>
          </div>
          <span class="inline-flex ml-auto">
            {{ rating }}
            <StarIcon class="w-4 ml-3 text-gold" />
          </span>
        </div>
        <p class="w-full">{{ text }}</p>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import {ref} from 'vue'
import {Autoplay, Navigation, Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'
import {StarIcon} from '@heroicons/vue/solid'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/assets/css/reviews-slider.css'

const modules = ref([Autoplay, Navigation, Pagination])

const reviews = ref([
  {
    id: '1',
    author: 'Viezh Robert',
    avatar: '@/assets/images/avatar-1.png',
    from: 'Warsaw, Poland',
    text: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
    rating: 4.5,
  },
  {
    id: '2',
    author: 'Yessica Christy',
    avatar: '@/assets/images/avatar-2.png',
    from: 'Shanxi, China',
    text: '“I like it because I like to travel far and still can connect with high speed.”.',
    rating: 4.5,
  },
  {
    id: '3',
    author: 'Kim Young Jou',
    avatar: '@/assets/images/avatar-3.png',
    from: 'Seoul, South Korea',
    text: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
    rating: 4.5,
  },
  {
    id: '4',
    author: 'Viezh Robert',
    avatar: '@/assets/images/avatar-1.png',
    from: 'Warsaw, Poland',
    text: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
    rating: 4.5,
  },
  {
    id: '5',
    author: 'Yessica Christy',
    avatar: '@/assets/images/avatar-2.png',
    from: 'Shanxi, China',
    text: '“I like it because I like to travel far and still can connect with high speed.”.',
    rating: 4.5,
  },
])
</script>

<style lang="scss" scoped></style>
