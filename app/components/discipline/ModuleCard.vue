<template>
  <NuxtLink :to="`/aula/${module.id}`" class="block">
    <SharedCardBase>
      <div class="space-y-2">
        <h3 class="font-semibold text-gray-800">{{ module.title }}</h3>
        <p class="text-sm text-gray-500">
          {{ module.lessonsCompleted }} de {{ module.lessonsCount }} aulas concluídas
        </p>
        <SharedProgressBar :percent="module.progressPercent" />
      </div>
    </SharedCardBase>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { CourseModule } from '../../../data/types'

defineProps<{
  module: CourseModule
}>()
</script>
