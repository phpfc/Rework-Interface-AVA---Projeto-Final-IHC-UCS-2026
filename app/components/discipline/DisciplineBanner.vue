<template>
  <div class="rounded-xl overflow-hidden">
    <div class="bg-gradient-to-r from-primary-600 to-primary-500 px-5 py-6">
      <span class="text-white text-2xl font-bold">AVA UCS</span>
    </div>
    <div class="bg-white px-5 py-3">
      <p class="font-semibold text-gray-800">
        {{ courseCode }} - {{ courseName }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  courseCode: string
  courseName: string
}>()
</script>
