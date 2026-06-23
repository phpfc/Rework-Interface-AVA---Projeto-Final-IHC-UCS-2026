<template>
  <div class="space-y-4">
    <!-- Statement -->
    <div class="bg-primary-50 p-4 rounded-lg">
      <p class="text-gray-800 font-medium leading-relaxed">{{ question.statement }}</p>
    </div>

    <!-- Alternatives -->
    <div class="space-y-2">
      <button
        v-for="alt in question.alternatives"
        :key="alt.id"
        class="w-full text-left p-4 rounded-lg border-2 transition-colors flex items-start gap-3"
        :class="alternativeClasses(alt.id)"
        :disabled="showResult"
        @click="emit('select', alt.id)"
      >
        <!-- Radio indicator -->
        <span
          class="w-5 h-5 rounded-full border-2 shrink-0 mt-0.5 flex items-center justify-center"
          :class="radioClasses(alt.id)"
        >
          <span
            v-if="selectedId === alt.id"
            class="w-2.5 h-2.5 rounded-full"
            :class="radioDotClasses(alt.id)"
          />
        </span>
        <span class="text-sm">{{ alt.text }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { QuizQuestion } from '../../../data/types'

const props = defineProps<{
  question: QuizQuestion
  selectedId: string | null
  showResult: boolean
  correctId?: string
}>()

const emit = defineEmits<{
  select: [alternativeId: string]
}>()

function alternativeClasses(altId: string) {
  if (props.showResult && props.correctId) {
    if (altId === props.correctId) {
      return 'border-success-500 bg-success-50'
    }
    if (altId === props.selectedId && altId !== props.correctId) {
      return 'border-danger-500 bg-danger-50'
    }
    return 'border-gray-200 bg-white opacity-60'
  }

  if (altId === props.selectedId) {
    return 'border-primary-500 bg-primary-50'
  }

  return 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
}

function radioClasses(altId: string) {
  if (props.showResult && props.correctId) {
    if (altId === props.correctId) return 'border-success-500'
    if (altId === props.selectedId && altId !== props.correctId) return 'border-danger-500'
    return 'border-gray-300'
  }

  if (altId === props.selectedId) return 'border-primary-500'
  return 'border-gray-300'
}

function radioDotClasses(altId: string) {
  if (props.showResult && props.correctId) {
    if (altId === props.correctId) return 'bg-success-500'
    if (altId === props.selectedId) return 'bg-danger-500'
    return 'bg-gray-300'
  }
  return 'bg-primary-500'
}
</script>
