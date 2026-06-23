import type { LessonFile, Course, CourseModule } from '../../data/types'
import { mockLessons } from '../../data/mocks/lessons'
import { mockModules } from '../../data/mocks/modules'
import { mockCourses } from '../../data/mocks/courses'

export function useLesson(moduleId: MaybeRef<string>) {
  const isLoading = ref(false)

  const module_ = computed<CourseModule | undefined>(() => {
    const mid = toValue(moduleId)
    return mockModules.find(m => m.id === mid)
  })

  const course = computed<Course | undefined>(() => {
    if (!module_.value) return undefined
    return mockCourses.find(c => c.id === module_.value!.courseId)
  })

  const files = computed<LessonFile[]>(() => {
    const mid = toValue(moduleId)
    return mockLessons
      .filter(l => l.moduleId === mid)
      .sort((a, b) => a.order - b.order)
  })

  const moduleName = computed<string>(() => {
    return module_.value?.title ?? ''
  })

  return {
    files,
    module: module_,
    course,
    moduleName,
    isLoading,
  }
}
