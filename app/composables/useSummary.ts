import type { ContentSummary } from '../../data/types'
import { mockSummaries } from '../../data/mocks/summaries'

export function useSummary(summaryId: MaybeRef<string>) {
  const isLoading = ref(false)

  const summary = computed<ContentSummary | undefined>(() => {
    const id = toValue(summaryId)
    return mockSummaries.find(s => s.id === id)
  })

  return {
    summary,
    isLoading,
  }
}
