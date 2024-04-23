<template>
  <TheHeaderComponent />
  <main class="h-[calc(100vh-5rem)] overflow-y-scroll p-8">
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeaderComponent from './components/TheHeaderComponent.vue'
</script>
<style lang="scss">
html {
  overflow: hidden;
  *::-webkit-scrollbar {
    width: 18px;
  }
  *::-webkit-scrollbar-thumb {
    background: rgba(150, 150, 150, 0.5);
    border-radius: 10px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
}
</style>
