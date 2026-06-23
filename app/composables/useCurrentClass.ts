import type { ClassSession } from '../../data/types'
import { mockClasses } from '../../data/mocks/classes'
import { useAttendanceStore } from '../stores/attendance'

export function useCurrentClass() {
  const attendanceStore = useAttendanceStore()
  const isConfirming = ref(false)

  const currentClass = computed<ClassSession | null>(() => {
    const cls = mockClasses[0]
    if (!cls) return null

    return {
      ...cls,
      confirmed: cls.confirmed || attendanceStore.confirmedClassIds.has(cls.id),
    }
  })

  async function confirmAttendance(id: string) {
    isConfirming.value = true
    try {
      await attendanceStore.confirmAttendance(id)
    }
    finally {
      isConfirming.value = false
    }
  }

  return {
    currentClass,
    confirmAttendance,
    isConfirming,
  }
}
