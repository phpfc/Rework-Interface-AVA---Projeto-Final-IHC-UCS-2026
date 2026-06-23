import { defineStore } from 'pinia'

export const useAttendanceStore = defineStore('attendance', () => {
  const confirmedClassIds = ref<Set<string>>(new Set())

  async function confirmAttendance(id: string) {
    await new Promise(resolve => setTimeout(resolve, 500))
    confirmedClassIds.value = new Set([...confirmedClassIds.value, id])
  }

  return {
    confirmedClassIds,
    confirmAttendance,
  }
})
