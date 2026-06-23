<template>
  <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
    <div
      class="bg-primary-500 h-2 rounded-full transition-all duration-500"
      :style="{ width: `${clampedPercent}%` }"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  percent: number
}>()

const clampedPercent = computed(() => Math.min(100, Math.max(0, props.percent)))
</script>
