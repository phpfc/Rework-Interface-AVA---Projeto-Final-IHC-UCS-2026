<template>
  <SharedCardBase>
    <div class="space-y-3">
      <!-- Title -->
      <h3 class="font-bold text-gray-800">{{ deadline.title }}</h3>

      <!-- Due date -->
      <div class="text-sm text-gray-500">
        <FontAwesomeIcon :icon="['fas', 'calendar-alt']" class="mr-1" />
        Entrega - {{ formatShortDate(deadline.dueDate) }}
      </div>

      <!-- Course info -->
      <p class="text-sm text-gray-600">{{ deadline.courseName }}</p>

      <!-- Professor and room -->
      <div class="flex flex-wrap gap-4 text-sm text-gray-600">
        <span>
          <FontAwesomeIcon :icon="['fas', 'graduation-cap']" class="mr-1 text-primary-500" />
          {{ deadline.professorName }}
        </span>
        <span>
          <FontAwesomeIcon :icon="['fas', 'building']" class="mr-1 text-primary-500" />
          {{ deadline.room }}
        </span>
      </div>

      <!-- Action buttons -->
      <div class="space-y-2 pt-1">
        <template v-if="deadline.type === 'trabalho'">
          <SharedActionButton label="Abrir Tarefa" />
        </template>
        <template v-else>
          <SharedActionButton
            label="Resumo do Conteúdo"
            @click="navigateTo(`/resumo/${deadline.summaryId}`)"
          />
          <SharedActionButton
            label="Fazer Simulado"
            @click="navigateTo(`/quiz/${deadline.quizId}`)"
          />
        </template>
      </div>
    </div>
  </SharedCardBase>
</template>

<script setup lang="ts">
import type { Deadline } from '../../../data/types'

defineProps<{
  deadline: Deadline
}>()

function formatShortDate(dateStr: string): string {
  const [, month, day] = dateStr.split('-')
  return `${day}/${month}`
}
</script>
