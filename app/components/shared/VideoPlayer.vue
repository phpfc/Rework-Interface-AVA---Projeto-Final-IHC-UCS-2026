<template>
  <div class="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
    <video
      v-if="src"
      :src="src"
      :title="title"
      controls
      class="w-full h-full object-contain"
    />
    <div
      v-else
      class="absolute inset-0 flex flex-col items-center justify-center text-white gap-3"
    >
      <div class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
        <FontAwesomeIcon :icon="['fas', 'play']" class="text-2xl ml-1" />
      </div>
      <span class="text-sm font-medium text-center px-4">{{ title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  title: string
}>()
</script>
