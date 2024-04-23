<template>
  <TheHeaderComponent />
  <main><RouterView /></main>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeaderComponent from './components/TheHeaderComponent.vue'
import { ref } from 'vue'

// const menuLinks = ref<Links>([
//   {
//     name: 'Home',
//     link: '/'
//   }
// ])
</script>
<style lang="scss" scoped></style>
