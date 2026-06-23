<template>
  <SharedCardBase no-padding>
    <template v-if="currentClass">
      <!-- Blue gradient banner -->
      <div class="bg-gradient-to-r from-primary-600 to-primary-500 px-5 py-6">
        <span class="text-white text-2xl font-bold">AVA UCS</span>
      </div>

      <div class="p-4 space-y-3">
        <!-- Course code + name -->
        <h3 class="font-semibold text-gray-800">
          {{ currentClass.courseCode }} - {{ currentClass.courseName }}
        </h3>

        <!-- Date metadata -->
        <div class="flex flex-wrap justify-between gap-2 text-sm text-gray-500">
          <span>
            <FontAwesomeIcon :icon="['fas', 'calendar-alt']" class="mr-1" />
            Início: {{ formatDate(currentClass.startDate) }}
          </span>
          <span>
            <FontAwesomeIcon :icon="['fas', 'calendar-alt']" class="mr-1" />
            Encerra: {{ formatDate(currentClass.endDate) }}
          </span>
        </div>

        <!-- Professor and room -->
        <div class="flex flex-wrap gap-4 text-sm text-gray-600">
          <span>
            <FontAwesomeIcon :icon="['fas', 'graduation-cap']" class="mr-1 text-primary-500" />
            {{ currentClass.professorName }}
          </span>
          <span>
            <FontAwesomeIcon :icon="['fas', 'building']" class="mr-1 text-primary-500" />
            {{ currentClass.room }}
          </span>
        </div>

        <!-- Action buttons -->
        <div class="space-y-2 pt-1">
          <SharedActionButton
            label="Acessar Disciplina"
            @click="navigateTo(`/disciplina/${currentClass.courseId}`)"
          />
          <SharedActionButton
            :label="currentClass.confirmed ? 'Presença Confirmada' : 'Confirmar Presença'"
            :icon="currentClass.confirmed ? 'check' : undefined"
            :disabled="currentClass.confirmed"
            :loading="isConfirming"
            @click="confirmAttendance(currentClass.id)"
          />
        </div>
      </div>
    </template>
  </SharedCardBase>
</template>

<script setup lang="ts">
const { currentClass, confirmAttendance, isConfirming } = useCurrentClass()

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-')
  return `${day}/${month}/${year}`
}
</script>
