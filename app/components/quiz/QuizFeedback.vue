<template>
  <SharedCardBase>
    <div class="text-center space-y-4 py-2">
      <!-- Score icon -->
      <div
        class="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
        :class="passed ? 'bg-success-100' : 'bg-danger-100'"
      >
        <FontAwesomeIcon
          :icon="['fas', passed ? 'check' : 'times']"
          class="text-2xl"
          :class="passed ? 'text-success-600' : 'text-danger-600'"
        />
      </div>

      <!-- Score text -->
      <div>
        <p class="text-2xl font-bold" :class="passed ? 'text-success-600' : 'text-danger-600'">
          {{ result.scorePercent }}%
        </p>
        <p class="text-gray-600 text-sm mt-1">
          {{ result.correctCount }} de {{ result.totalQuestions }} corretas
        </p>
      </div>

      <!-- Status label -->
      <span
        class="inline-block px-3 py-1 rounded-full text-sm font-medium"
        :class="passed ? 'bg-success-100 text-success-700' : 'bg-danger-100 text-danger-700'"
      >
        {{ passed ? 'Aprovado' : 'Reprovado' }}
      </span>
    </div>
  </SharedCardBase>
</template>

<script setup lang="ts">
import type { QuizResult } from '../../../data/types'

const props = defineProps<{
  result: QuizResult
}>()

const passed = computed(() => props.result.scorePercent >= 60)
</script>
