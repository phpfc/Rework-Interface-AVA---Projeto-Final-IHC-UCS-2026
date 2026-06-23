<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <DashboardDeadlineCard
      v-for="deadline in deadlines"
      :key="deadline.id"
      :deadline="deadline"
    />
  </div>
</template>

<script setup lang="ts">
const { deadlines } = useUpcomingDeadlines()
</script>
