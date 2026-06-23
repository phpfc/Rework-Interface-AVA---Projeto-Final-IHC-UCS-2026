import { defineStore } from 'pinia'

export const useNoticesStore = defineStore('notices', () => {
  const dismissedIds = ref<Set<string>>(new Set())

  function dismissNotice(id: string) {
    dismissedIds.value = new Set([...dismissedIds.value, id])
  }

  return {
    dismissedIds,
    dismissNotice,
  }
})
