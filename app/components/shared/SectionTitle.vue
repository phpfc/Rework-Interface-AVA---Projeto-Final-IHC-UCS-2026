<template>
  <div class="flex justify-between items-center">
    <h2 class="text-lg font-semibold text-gray-800">
      <FontAwesomeIcon v-if="icon" :icon="['fas', icon]" class="mr-2 text-primary-500" />
      {{ title }}
    </h2>
    <FontAwesomeIcon :icon="['fas', 'chevron-down']" class="text-gray-400 text-sm" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  icon?: string
}>()
</script>
