import type { LessonFile } from '../types'

export const mockLessons: LessonFile[] = [
  // Módulo 1 - Introdução a IHC
  {
    id: 'lesson-1',
    moduleId: 'module-1',
    title: 'Introdução a IHC',
    fileUrl: '',
    fileType: 'pdf',
    order: 1,
  },
  {
    id: 'lesson-2',
    moduleId: 'module-1',
    title: 'Livro Design de Interação',
    fileUrl: '',
    fileType: 'pdf',
    order: 2,
  },
  {
    id: 'lesson-3',
    moduleId: 'module-1',
    title: 'Imagens, animações e ícones',
    fileUrl: '',
    fileType: 'pdf',
    order: 3,
  },
  {
    id: 'lesson-4',
    moduleId: 'module-1',
    title: 'Cores e Apresentação de textos',
    fileUrl: '',
    fileType: 'pdf',
    order: 4,
  },

  // Módulo 3 - Personas e Jornadas
  {
    id: 'lesson-5',
    moduleId: 'module-3',
    title: 'Slides - Personas',
    fileUrl: '',
    fileType: 'pdf',
    order: 1,
  },
  {
    id: 'lesson-6',
    moduleId: 'module-3',
    title: 'Artigo - Mapa de Empatia',
    fileUrl: '',
    fileType: 'pdf',
    order: 2,
  },
  {
    id: 'lesson-7',
    moduleId: 'module-3',
    title: 'Vídeo - Jornada do Usuário',
    fileUrl: '',
    fileType: 'video',
    order: 3,
  },
]
