import type { CourseModule } from '../types'

export const mockModules: CourseModule[] = [
  {
    id: 'module-1',
    courseId: 'course-1',
    title: 'Módulo 1 - Introdução a IHC',
    progressPercent: 100,
    lessonsCount: 4,
    lessonsCompleted: 4,
    order: 1,
  },
  {
    id: 'module-2',
    courseId: 'course-1',
    title: 'Módulo 2 - Pesquisa com Usuários',
    progressPercent: 100,
    lessonsCount: 3,
    lessonsCompleted: 3,
    order: 2,
  },
  {
    id: 'module-3',
    courseId: 'course-1',
    title: 'Módulo 3 - Personas e Jornadas',
    progressPercent: 75,
    lessonsCount: 4,
    lessonsCompleted: 3,
    order: 3,
  },
  {
    id: 'module-4',
    courseId: 'course-1',
    title: 'Módulo 4 - Prototipação',
    progressPercent: 50,
    lessonsCount: 4,
    lessonsCompleted: 2,
    order: 4,
  },
  {
    id: 'module-5',
    courseId: 'course-1',
    title: 'Módulo 5 - Testes de Usabilidade',
    progressPercent: 0,
    lessonsCount: 3,
    lessonsCompleted: 0,
    order: 5,
  },
]
