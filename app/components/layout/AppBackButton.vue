<template>
  <button
    class="inline-flex items-center gap-2 p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
    @click="router.back()"
  >
    <FontAwesomeIcon :icon="['fas', 'arrow-left']" class="text-lg" />
  </button>
</template>

<script setup lang="ts">
const router = useRouter()
</script>
