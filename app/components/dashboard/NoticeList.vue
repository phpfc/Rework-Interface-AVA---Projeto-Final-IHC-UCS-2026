<template>
  <SharedCardBase>
    <TransitionGroup name="notice" tag="div" class="divide-y divide-gray-100">
      <DashboardNoticeItem
        v-for="notice in notices"
        :key="notice.id"
        :notice="notice"
        @dismiss="dismissNotice"
      />
    </TransitionGroup>
    <p v-if="notices.length === 0" class="text-sm text-gray-500 text-center py-4">
      Nenhum aviso pendente.
    </p>
  </SharedCardBase>
</template>

<script setup lang="ts">
const { notices, dismissNotice } = useNotices()
</script>

<style scoped>
.notice-enter-active,
.notice-leave-active {
  transition: all 0.3s ease;
}
.notice-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.notice-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
