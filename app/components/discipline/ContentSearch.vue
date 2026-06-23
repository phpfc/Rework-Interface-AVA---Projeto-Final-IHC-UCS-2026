<template>
  <div class="relative">
    <FontAwesomeIcon
      :icon="['fas', 'search']"
      class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
    />
    <input
      :value="modelValue"
      type="text"
      placeholder="Buscar conteúdo..."
      class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
