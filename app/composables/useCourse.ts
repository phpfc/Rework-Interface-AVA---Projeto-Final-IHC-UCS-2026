import type { Course, CourseModule } from '../../data/types'
import { mockCourses } from '../../data/mocks/courses'
import { mockModules } from '../../data/mocks/modules'

export function useCourse(id: MaybeRef<string>) {
  const isLoading = ref(false)

  const course = computed<Course | undefined>(() => {
    const courseId = toValue(id)
    return mockCourses.find(c => c.id === courseId)
  })

  const modules = computed<CourseModule[]>(() => {
    const courseId = toValue(id)
    return mockModules
      .filter(m => m.courseId === courseId)
      .sort((a, b) => a.order - b.order)
  })

  return {
    course,
    modules,
    isLoading,
  }
}
