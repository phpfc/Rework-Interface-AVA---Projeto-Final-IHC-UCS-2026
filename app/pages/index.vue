<template>
  <div class="space-y-6">
    <!-- Disciplina do dia -->
    <section>
      <SharedSectionTitle v-model:collapsed="todayCollapsed" title="Disciplina do dia" class="mb-3" />
      <DashboardTodayClassCard v-show="!todayCollapsed" />
    </section>

    <!-- Próximas Entregas -->
    <section>
      <SharedSectionTitle v-model:collapsed="deadlinesCollapsed" title="Próximas Entregas" class="mb-3" />
      <DashboardDeadlineGrid v-show="!deadlinesCollapsed" />
    </section>

    <!-- Avisos não Lidos -->
    <section>
      <SharedSectionTitle v-model:collapsed="noticesCollapsed" title="Avisos não Lidos" class="mb-3" />
      <DashboardNoticeList v-show="!noticesCollapsed" />
    </section>

    <!-- Disponíveis -->
    <section>
      <SharedSectionTitle v-model:collapsed="coursesCollapsed" title="Disponíveis" class="mb-3" />
      <DashboardCourseGrid v-show="!coursesCollapsed" />
    </section>
  </div>
</template>

<script setup lang="ts">
const todayCollapsed = ref(false)
const deadlinesCollapsed = ref(false)
const noticesCollapsed = ref(false)
const coursesCollapsed = ref(false)
</script>
