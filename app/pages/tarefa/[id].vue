<template>
  <div class="space-y-6">
    <template v-if="assignment">
      <!-- Course badge -->
      <div class="flex items-center gap-2 text-sm text-gray-500">
        <FontAwesomeIcon :icon="['fas', 'book']" class="text-primary-500" />
        <span>{{ assignment.courseCode }} - {{ assignment.courseName }}</span>
      </div>

      <!-- Title -->
      <h1 class="text-xl font-bold text-gray-800">{{ assignment.title }}</h1>

      <!-- Meta info -->
      <SharedCardBase>
        <div class="space-y-3">
          <div class="flex items-center gap-3 text-sm text-gray-600">
            <FontAwesomeIcon :icon="['fas', 'graduation-cap']" class="w-4 text-center text-primary-500" />
            <span>{{ assignment.professorName }}</span>
          </div>
          <div class="flex items-center gap-3 text-sm text-gray-600">
            <FontAwesomeIcon :icon="['fas', 'calendar-alt']" class="w-4 text-center text-primary-500" />
            <span>Entrega até {{ formatDate(assignment.dueDate) }}</span>
          </div>
          <div class="flex items-center gap-3 text-sm">
            <FontAwesomeIcon :icon="['fas', 'flag']" class="w-4 text-center" :class="statusColor" />
            <span :class="statusColor" class="font-medium capitalize">{{ assignment.status }}</span>
          </div>
        </div>
      </SharedCardBase>

      <!-- Description -->
      <section>
        <h2 class="text-base font-semibold text-gray-800 mb-2">Descrição</h2>
        <SharedCardBase>
          <p class="text-sm text-gray-600 leading-relaxed">{{ assignment.description }}</p>
        </SharedCardBase>
      </section>

      <!-- Attachments -->
      <section v-if="assignment.attachments.length > 0">
        <h2 class="text-base font-semibold text-gray-800 mb-2">Anexos do Professor</h2>
        <div class="space-y-2">
          <div
            v-for="(attachment, index) in assignment.attachments"
            :key="index"
            class="bg-white rounded-xl border-l-4 border-primary-500 flex items-center gap-4 p-4"
          >
            <div class="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
              <FontAwesomeIcon :icon="['fas', 'file']" class="text-primary-500" />
            </div>
            <span class="flex-1 text-sm font-medium text-gray-800">{{ attachment.name }}</span>
            <SharedActionButton
              label="Baixar"
              variant="filled"
              :full-width="false"
              class="shrink-0 w-auto px-5"
              @click="openFile(attachment.url)"
            />
          </div>
        </div>
      </section>

      <!-- Submit area -->
      <section>
        <h2 class="text-base font-semibold text-gray-800 mb-2">Enviar Trabalho</h2>
        <SharedCardBase>
          <div class="space-y-4">
            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <FontAwesomeIcon :icon="['fas', 'file']" class="text-3xl text-gray-300 mb-2" />
              <p class="text-sm text-gray-500">Arraste seu arquivo aqui ou clique para selecionar</p>
              <p class="text-xs text-gray-400 mt-1">PDF, DOC, DOCX, ZIP (máx. 50MB)</p>
            </div>
            <SharedActionButton label="Enviar Trabalho" variant="filled" icon="check" />
          </div>
        </SharedCardBase>
      </section>
    </template>

    <p v-else class="text-sm text-gray-500 text-center py-8">
      Tarefa não encontrada.
    </p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const assignmentId = computed(() => route.params.id as string)

const { assignment } = useAssignment(assignmentId)

const statusColor = computed(() => {
  if (!assignment.value) return ''
  return assignment.value.status === 'pendente' ? 'text-warning-500' : 'text-success-500'
})

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-')
  return `${day}/${month}/${year}`
}

function openFile(url: string) {
  window.open(url, '_blank')
}
</script>
