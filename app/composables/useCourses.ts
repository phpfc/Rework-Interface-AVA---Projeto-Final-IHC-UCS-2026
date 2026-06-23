import type { Course } from '../../data/types'
import { mockCourses } from '../../data/mocks/courses'

export function useCourses() {
  const courses = ref<Course[]>([...mockCourses])
  const isLoading = ref(false)

  return {
    courses,
    isLoading,
  }
}
