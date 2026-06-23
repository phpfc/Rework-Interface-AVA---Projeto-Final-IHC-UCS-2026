<template>
  <div class="relative inline-flex items-center justify-center" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg :width="size" :height="size" class="-rotate-90">
      <!-- Track -->
      <circle
        :cx="center"
        :cy="center"
        :r="radius"
        fill="none"
        class="stroke-gray-200"
        :stroke-width="strokeWidth"
      />
      <!-- Fill -->
      <circle
        :cx="center"
        :cy="center"
        :r="radius"
        fill="none"
        class="stroke-primary-500 transition-all duration-500"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
      />
    </svg>
    <span class="absolute text-xs font-semibold text-gray-700">
      {{ clampedPercent }}%
    </span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  percent: number
  size?: number
}>(), {
  size: 48,
})

const strokeWidth = 4
const center = computed(() => props.size / 2)
const radius = computed(() => (props.size - strokeWidth) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)
const clampedPercent = computed(() => Math.min(100, Math.max(0, props.percent)))
const dashOffset = computed(() => circumference.value * (1 - clampedPercent.value / 100))
</script>
