<template>
  <header class="sticky top-0 flex h-20 items-center justify-center gap-4 border-b border-gray-300">
    <router-link
      v-for="route in menuLists"
      :key="route.path"
      :to="{ name: route.name }"
      :class="{ 'text-blue-500': route.name === router.currentRoute.value.name }"
      >{{ route.name }}</router-link
    >
  </header>
</template>
<script lang="ts" setup>
// @ts-ignore
import router from '@/router'
import { computed } from 'vue'

const menuLists = computed(() => router.getRoutes().filter((route) => route.name !== '404'))
</script>
<style lang="scss" scoped></style>
