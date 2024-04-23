<template>
  <header class="flex h-20 items-center justify-center gap-4 border-b border-gray-300">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
  </header>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped></style>
