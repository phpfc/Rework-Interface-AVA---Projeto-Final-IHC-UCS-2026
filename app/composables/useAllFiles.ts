import type { LessonFile, Course } from '../../data/types'
import { mockLessons } from '../../data/mocks/lessons'
import { mockCourses } from '../../data/mocks/courses'

export function useAllFiles() {
  const isLoading = ref(false)
  const selectedCourseId = ref<string>('')

  const courses = computed<Course[]>(() => [...mockCourses])

  const files = computed<LessonFile[]>(() => {
    let result = [...mockLessons]
    if (selectedCourseId.value) {
      result = result.filter(f => f.courseId === selectedCourseId.value)
    }
    return result.sort((a, b) => a.order - b.order)
  })

  const selectedCourse = computed<Course | undefined>(() => {
    if (!selectedCourseId.value) return undefined
    return mockCourses.find(c => c.id === selectedCourseId.value)
  })

  function filterByCourse(courseId: string) {
    selectedCourseId.value = courseId
  }

  function clearFilter() {
    selectedCourseId.value = ''
  }

  function getCourseForFile(file: LessonFile): Course | undefined {
    return mockCourses.find(c => c.id === file.courseId)
  }

  return {
    files,
    courses,
    selectedCourseId,
    selectedCourse,
    filterByCourse,
    clearFilter,
    getCourseForFile,
    isLoading,
  }
}
