<template>
  <div class="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
    <!-- Back arrow -->
    <button
      class="p-2 text-gray-600 hover:text-gray-900 transition-colors"
      @click="emit('back')"
    >
      <FontAwesomeIcon :icon="['fas', 'arrow-left']" class="text-lg" />
    </button>

    <!-- Question counter -->
    <span class="font-semibold text-gray-800">
      {{ currentQuestion }}/{{ totalQuestions }}
    </span>

    <!-- Bookmark + Flag -->
    <div class="flex items-center gap-3">
      <button
        class="p-2 transition-colors"
        :class="bookmarked ? 'text-primary-500' : 'text-gray-400 hover:text-gray-600'"
        @click="emit('toggleBookmark')"
      >
        <FontAwesomeIcon :icon="[bookmarked ? 'fas' : 'far', 'bookmark']" class="text-lg" />
      </button>
      <button
        class="p-2 transition-colors"
        :class="flagged ? 'text-danger-500' : 'text-gray-400 hover:text-gray-600'"
        @click="emit('toggleFlag')"
      >
        <FontAwesomeIcon :icon="[flagged ? 'fas' : 'far', 'flag']" class="text-lg" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentQuestion: number
  totalQuestions: number
  bookmarked: boolean
  flagged: boolean
}>()

const emit = defineEmits<{
  back: []
  toggleBookmark: []
  toggleFlag: []
}>()
</script>
