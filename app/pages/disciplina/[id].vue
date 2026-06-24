<template>
  <div class="space-y-6">
    <!-- Greeting -->
    <p class="text-gray-600">{{ greeting }}</p>

    <!-- Banner -->
    <DisciplineBanner
      v-if="course"
      :course-code="course.code"
      :course-name="course.name"
    />

    <!-- Progress -->
    <div v-if="course" class="flex items-center gap-3">
      <SharedProgressRing :percent="course.progressPercent" :size="56" />
      <div>
        <p class="text-sm font-medium text-gray-800">Progresso geral</p>
        <p class="text-xs text-gray-500">{{ course.progressPercent }}% concluído</p>
      </div>
    </div>

    <!-- Content section -->
    <section>
      <SharedSectionTitle title="Seu conteúdo" class="mb-3" />
      <DisciplineContentSearch v-model="searchQuery" class="mb-4" />
      <div class="space-y-3">
        <DisciplineModuleCard
          v-for="mod in filteredModules"
          :key="mod.id"
          :module="mod"
        />
        <p v-if="filteredModules.length === 0" class="text-sm text-gray-500 text-center py-4">
          Nenhum módulo encontrado.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const courseId = computed(() => route.params.id as string)

const { course, modules } = useCourse(courseId)
const { greeting } = useUser()

const searchQuery = ref('')

const filteredModules = computed(() => {
  if (!searchQuery.value.trim()) return modules.value
  const query = searchQuery.value.toLowerCase()
  return modules.value.filter(m => m.title.toLowerCase().includes(query))
})
</script>
