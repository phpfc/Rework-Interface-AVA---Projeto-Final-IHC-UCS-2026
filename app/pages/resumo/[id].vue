<template>
  <div class="space-y-6">
    <!-- Back button -->
    <LayoutAppBackButton />

    <template v-if="summary">
      <!-- Title -->
      <h1 class="text-lg font-bold text-gray-800">{{ summary.title }}</h1>

      <!-- Video player -->
      <SharedVideoPlayer :src="summary.videoUrl" :title="summary.title" />

      <!-- Description -->
      <SharedCardBase>
        <p class="text-sm text-gray-600 leading-relaxed">{{ summary.description }}</p>
      </SharedCardBase>
    </template>

    <p v-else class="text-sm text-gray-500 text-center py-8">
      Resumo não encontrado.
    </p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const summaryId = computed(() => route.params.id as string)

const { summary } = useSummary(summaryId)
</script>
