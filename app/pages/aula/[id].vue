<template>
  <div class="space-y-6">
    <!-- Back button -->
    <LayoutAppBackButton />

    <!-- Title -->
    <h1 v-if="course" class="text-lg font-bold text-gray-800">
      Arquivos da Aula {{ course.code }} - {{ course.name }}
    </h1>

    <!-- File list -->
    <div class="space-y-3">
      <div
        v-for="file in files"
        :key="file.id"
        class="bg-white rounded-xl border-l-4 border-primary-500 p-4 flex items-center gap-4"
      >
        <!-- File icon -->
        <div class="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
          <FontAwesomeIcon :icon="['fas', fileIcon(file.fileType)]" class="text-primary-500" />
        </div>

        <!-- File info and action -->
        <div class="flex-1 min-w-0">
          <p class="font-medium text-gray-800 text-sm truncate">{{ file.title }}</p>
          <SharedActionButton
            label="Acessar arquivo"
            variant="filled"
            class="mt-2"
          />
        </div>
      </div>

      <p v-if="files.length === 0" class="text-sm text-gray-500 text-center py-4">
        Nenhum arquivo disponível para esta aula.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const moduleId = computed(() => route.params.id as string)

const { files, course } = useLesson(moduleId)

function fileIcon(fileType: string): string {
  const icons: Record<string, string> = {
    pdf: 'file-pdf',
    video: 'video',
    link: 'link',
    doc: 'file-word',
  }
  return icons[fileType] ?? 'file'
}
</script>
