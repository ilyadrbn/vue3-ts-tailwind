<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    <PostItem v-for="post in postList" :key="post.id" :post="post">
      <button @click="$emit('delete-post', post.id)" class="delete absolute right-4 top-4">&#10060;</button>
    </PostItem>
  </div>
</template>
<script lang="ts" setup>
import PostItem from './PostItem.vue'
interface Post {
  id: number
  title: string
  description: string
}

defineProps({
  postList: Array as () => Post[]
})
</script>
