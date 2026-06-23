<template>
  <div
    class="rounded-full overflow-hidden flex items-center justify-center shrink-0"
    :class="src ? '' : 'bg-primary-100 text-primary-700'"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <img
      v-if="src"
      :src="src"
      :alt="name"
      class="w-full h-full object-cover"
    />
    <span v-else class="font-semibold" :style="{ fontSize: `${size * 0.38}px` }">
      {{ initials }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  src: string
  name: string
  size?: number
}>(), {
  size: 40,
})

const initials = computed(() => {
  return props.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join('')
})
</script>
