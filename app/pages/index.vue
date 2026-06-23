<template>
  <div class="space-y-6">
    <!-- Disciplina do dia -->
    <section>
      <SharedSectionTitle title="Disciplina do dia" class="mb-3" />
      <DashboardTodayClassCard />
    </section>

    <!-- Próximas Entregas -->
    <section>
      <SharedSectionTitle title="Próximas Entregas" class="mb-3" />
      <DashboardDeadlineGrid />
    </section>

    <!-- Avisos não Lidos -->
    <section>
      <SharedSectionTitle title="Avisos não Lidos" class="mb-3" />
      <DashboardNoticeList />
    </section>

    <!-- Disponíveis -->
    <section>
      <SharedSectionTitle title="Disponíveis" class="mb-3" />
      <DashboardCourseGrid />
    </section>
  </div>
</template>
