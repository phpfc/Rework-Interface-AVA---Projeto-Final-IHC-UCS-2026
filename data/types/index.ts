export interface User {
  id: string
  name: string
  fullName: string
  avatarUrl: string
  matricula: string
}

export interface ClassSession {
  id: string
  courseId: string
  courseCode: string
  courseName: string
  professorName: string
  room: string
  startDate: string
  endDate: string
  schedule: string
  confirmed: boolean
}

export type DeadlineType = 'trabalho' | 'prova'

export interface Deadline {
  id: string
  title: string
  type: DeadlineType
  dueDate: string
  courseName: string
  courseCode: string
  professorName: string
  room: string
  quizId?: string
  summaryId?: string
}

export interface Notice {
  id: string
  professorName: string
  professorAvatarUrl: string
  date: string
  courseName: string
  courseCode: string
  room: string
  content: string
  read: boolean
}

export interface Course {
  id: string
  code: string
  name: string
  professorName: string
  progressPercent: number
  semester: string
}

export interface CourseModule {
  id: string
  courseId: string
  title: string
  progressPercent: number
  lessonsCount: number
  lessonsCompleted: number
  order: number
}

export interface LessonFile {
  id: string
  moduleId: string
  courseId: string
  title: string
  fileUrl: string
  fileType: 'pdf' | 'video' | 'link' | 'doc'
  order: number
}

export interface QuizAlternative {
  id: string
  text: string
  isCorrect: boolean
}

export interface QuizQuestion {
  id: string
  order: number
  statement: string
  alternatives: QuizAlternative[]
  bookmarked: boolean
  flagged: boolean
}

export interface Quiz {
  id: string
  courseId: string
  courseName: string
  title: string
  questions: QuizQuestion[]
}

export interface ContentSummary {
  id: string
  courseId: string
  title: string
  videoUrl: string
  description: string
}

export interface QuizResult {
  totalQuestions: number
  correctCount: number
  incorrectCount: number
  scorePercent: number
  questionResults: {
    questionId: string
    selectedId: string | null
    correctId: string
    isCorrect: boolean
  }[]
}
