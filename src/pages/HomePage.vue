<template>
  <InputForm @add-post="addPostToList" />
  <PostTable v-if="PostList.length" :post-list="PostList" @delete-post="deletePostFromList" />
</template>
<script lang="ts" setup>
import InputForm from '@/components/InputForm.vue'
import PostTable from '@/components/PostTable.vue'

import { ref } from 'vue'

interface Post {
  id: number
  title: string
  description: string
}
const PostList = ref<Post[]>([])

const addPostToList = (value: string[]) => {
  PostList.value.push({ id: PostList.value.length + 1, title: value[0], description: value[1] })
}
const deletePostFromList = (id: number) => {
  PostList.value = PostList.value.filter((post) => post.id !== id)
}
</script>
<style lang="scss" scoped></style>
