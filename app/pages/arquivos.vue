<template>
  <div class="space-y-6">
    <!-- Title -->
    <h1 class="text-lg font-bold text-gray-800">Arquivos</h1>

    <!-- Course filter -->
    <div class="bg-white rounded-xl p-4">
      <label class="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
        <FontAwesomeIcon :icon="['fas', 'filter']" class="text-primary-500" />
        Filtrar por disciplina
      </label>
      <select
        v-model="selectedCourseId"
        class="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      >
        <option value="">Todas as disciplinas</option>
        <option v-for="course in courses" :key="course.id" :value="course.id">
          {{ course.code }} - {{ course.name }}
        </option>
      </select>
    </div>

    <!-- Selected discipline label -->
    <p v-if="selectedCourse" class="text-sm text-gray-500">
      Arquivos da Aula {{ selectedCourse.code }} - {{ selectedCourse.name }}
    </p>
    <p v-else class="text-sm text-gray-500">
      Mostrando arquivos de todas as disciplinas
    </p>

    <!-- File list -->
    <div class="space-y-3">
      <div
        v-for="file in files"
        :key="file.id"
        class="bg-white rounded-xl border-l-4 border-primary-500 flex items-center gap-4 p-4"
      >
        <!-- File icon -->
        <div class="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
          <FontAwesomeIcon :icon="['fas', fileIcon(file.fileType)]" class="text-primary-500 text-lg" />
        </div>

        <!-- File info -->
        <div class="flex-1 min-w-0">
          <p class="font-medium text-gray-800 text-sm">{{ file.title }}</p>
          <p v-if="!selectedCourseId" class="text-xs text-gray-400 mt-0.5">
            {{ getCourseName(file.courseId) }}
          </p>
        </div>

        <!-- Action button -->
        <SharedActionButton
          label="Acessar arquivo"
          variant="filled"
          :full-width="false"
          class="shrink-0 w-auto px-5"
        />
      </div>

      <p v-if="files.length === 0" class="text-sm text-gray-500 text-center py-8">
        Nenhum arquivo disponível.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { files, courses, selectedCourseId, selectedCourse, getCourseForFile } = useAllFiles()

function fileIcon(fileType: string): string {
  const icons: Record<string, string> = {
    pdf: 'file-pdf',
    video: 'video',
    link: 'link',
    doc: 'file-word',
  }
  return icons[fileType] ?? 'file'
}

function getCourseName(courseId: string): string {
  const course = getCourseForFile({ courseId } as any)
  return course ? `${course.code} - ${course.name}` : ''
}
</script>
