import type { Notice } from '../../data/types'
import { mockNotices } from '../../data/mocks/notices'
import { useNoticesStore } from '../stores/notices'

export function useNotices() {
  const store = useNoticesStore()
  const isLoading = ref(false)

  const notices = computed<Notice[]>(() => {
    return mockNotices.filter(n => !store.dismissedIds.has(n.id))
  })

  const unreadCount = computed(() => {
    return notices.value.filter(n => !n.read).length
  })

  function dismissNotice(id: string) {
    store.dismissNotice(id)
  }

  return {
    notices,
    unreadCount,
    dismissNotice,
    isLoading,
  }
}
