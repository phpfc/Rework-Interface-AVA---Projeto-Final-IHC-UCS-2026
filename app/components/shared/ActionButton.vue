<template>
  <button
    :disabled="disabled || loading"
    class="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors min-h-[44px] px-4"
    :class="[
      fullWidth ? 'w-full' : '',
      variantClasses,
      (disabled || loading) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ]"
    @click="emit('click')"
  >
    <svg
      v-if="loading"
      class="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
    <FontAwesomeIcon v-if="icon && !loading" :icon="['fas', icon]" />
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  label: string
  variant?: 'outlined' | 'filled'
  icon?: string
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}>(), {
  variant: 'outlined',
  disabled: false,
  loading: false,
  fullWidth: true,
})

const emit = defineEmits<{
  click: []
}>()

const variantClasses = computed(() => {
  if (props.variant === 'filled') {
    return 'bg-primary-500 text-white hover:bg-primary-600'
  }
  return 'border border-gray-300 bg-white text-gray-800 hover:bg-gray-50'
})
</script>
