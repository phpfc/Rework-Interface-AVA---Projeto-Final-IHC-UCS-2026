import type { Deadline } from '../../data/types'
import { mockDeadlines } from '../../data/mocks/deadlines'

export function useUpcomingDeadlines() {
  const deadlines = ref<Deadline[]>([...mockDeadlines])
  const isLoading = ref(false)

  return {
    deadlines,
    isLoading,
  }
}
