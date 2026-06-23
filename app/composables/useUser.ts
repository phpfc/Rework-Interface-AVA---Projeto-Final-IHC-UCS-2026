import type { User } from '../../data/types'
import { mockUser } from '../../data/mocks/user'

export function useUser() {
  const user = ref<User>({ ...mockUser })

  const greeting = computed(() => {
    const firstName = user.value.name.split(' ')[0]
    return `Olá, ${firstName}`
  })

  return {
    user,
    greeting,
  }
}
