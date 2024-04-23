<template>
  <div class="relative min-h-[94px] border p-4">
    <div class="font-mono text-2xl">{{ post.title }}</div>
    <div class="text-pretty font-serif text-lg">{{ post.description }}</div>
    <slot />
  </div>
</template>
<script lang="ts" setup>
interface Post {
  id: number
  title: string
  description: string
}

defineProps({
  post: {
    type: Object as () => Post,
    required: true
  }
})
</script>
