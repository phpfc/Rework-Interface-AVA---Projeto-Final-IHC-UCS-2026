<template>
  <div class="flex justify-between gap-4">
    <!-- Previous button -->
    <button
      :disabled="!canPrev"
      class="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
      :class="canPrev ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-300 cursor-not-allowed'"
      @click="emit('prev')"
    >
      <FontAwesomeIcon :icon="['fas', 'chevron-left']" />
      <span>Anterior</span>
    </button>

    <!-- Next button -->
    <button
      v-if="!isLast"
      :disabled="!canNext"
      class="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
      :class="canNext ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-300 cursor-not-allowed'"
      @click="emit('next')"
    >
      <span>Próxima</span>
      <FontAwesomeIcon :icon="['fas', 'chevron-right']" />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  canPrev: boolean
  canNext: boolean
  isLast: boolean
}>()

const emit = defineEmits<{
  prev: []
  next: []
}>()
</script>
