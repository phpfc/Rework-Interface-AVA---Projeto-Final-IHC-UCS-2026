import type { Assignment } from '../../data/types'
import { mockAssignments } from '../../data/mocks/assignments'

export function useAssignment(assignmentId: MaybeRef<string>) {
  const isLoading = ref(false)

  const assignment = computed<Assignment | undefined>(() => {
    const id = toValue(assignmentId)
    return mockAssignments.find(a => a.id === id)
  })

  return {
    assignment,
    isLoading,
  }
}
