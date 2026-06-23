<template>
  <NuxtLink :to="`/disciplina/${course.id}`" class="block">
    <SharedCardBase>
      <div class="flex items-center gap-3">
        <div class="flex-1 min-w-0">
          <p class="text-xs text-gray-500 font-medium">{{ course.code }}</p>
          <h3 class="font-semibold text-gray-800 text-sm truncate">{{ course.name }}</h3>
        </div>
        <SharedProgressRing :percent="course.progressPercent" :size="48" />
      </div>
    </SharedCardBase>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Course } from '../../../data/types'

defineProps<{
  course: Course
}>()
</script>
