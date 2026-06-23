<template>
  <div
    class="bg-white rounded-xl overflow-hidden"
    :class="{ 'p-4': !noPadding }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  noPadding?: boolean
}>()
</script>
