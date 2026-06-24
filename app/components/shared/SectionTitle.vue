<template>
  <button
    class="flex justify-between items-center w-full text-left cursor-pointer"
    @click="toggle"
  >
    <h2 class="text-lg font-semibold text-gray-800">
      <FontAwesomeIcon v-if="icon" :icon="['fas', icon]" class="mr-2 text-primary-500" />
      {{ title }}
    </h2>
    <FontAwesomeIcon
      :icon="['fas', 'chevron-down']"
      class="text-gray-400 text-sm transition-transform duration-200"
      :class="{ 'rotate-180': !collapsed }"
    />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  icon?: string
  collapsible?: boolean
}>(), {
  collapsible: true,
})

const collapsed = defineModel<boolean>('collapsed', { default: false })

function toggle() {
  if (props.collapsible) {
    collapsed.value = !collapsed.value
  }
}
</script>
