<template>
  <div class="flex gap-3 py-3">
    <!-- Avatar -->
    <SharedAvatarCircle
      :src="notice.professorAvatarUrl"
      :name="notice.professorName"
      :size="40"
    />

    <!-- Content -->
    <div class="flex-1 min-w-0">
      <div class="flex items-start justify-between gap-2">
        <div>
          <p class="font-semibold text-gray-800 text-sm">{{ notice.professorName }}</p>
          <p class="text-xs text-gray-500">
            {{ formatDate(notice.date) }} - {{ notice.courseName }} - {{ notice.room }}
          </p>
        </div>
        <!-- Dismiss button -->
        <button
          class="p-1 text-gray-400 hover:text-gray-600 transition-colors shrink-0"
          @click="emit('dismiss', notice.id)"
        >
          <FontAwesomeIcon :icon="['fas', 'times']" />
        </button>
      </div>
      <p class="text-sm text-gray-600 mt-1">{{ notice.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Notice } from '../../../data/types'

defineProps<{
  notice: Notice
}>()

const emit = defineEmits<{
  dismiss: [id: string]
}>()

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-')
  return `${day}/${month}/${year}`
}
</script>
