<template>
  <form @submit.prevent class="mb-4">
    <div
      class="input-form mb-4 mt-4 flex w-full flex-col gap-4 rounded border border-gray-300 bg-white p-4 shadow"
    >
      <input
        v-model="formTitle"
        class="font-mono text-2xl focus:outline-none"
        id="title"
        type="text"
        placeholder="Enter title..."
      />
      <input
        v-model="formDescription"
        class="text-pretty font-serif text-lg focus:outline-none"
        id="description"
        type="text"
        placeholder="Enter description..."
      />
    </div>
    <button
      class="w-full rounded bg-blue-500 p-2 text-white"
      @click="$emit('add-post', [formTitle, formDescription]), clearInputs()"
    >
      Post
    </button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const formTitle = ref('')
const formDescription = ref('')

const clearInputs = () => {
  formTitle.value = ''
  formDescription.value = ''
}
</script>
