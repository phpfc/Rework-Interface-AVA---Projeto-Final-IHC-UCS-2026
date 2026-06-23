import type { Notice } from '../types'

export const mockNotices: Notice[] = [
  {
    id: 'notice-1',
    professorName: 'Prof.ª Elisa Boff',
    professorAvatarUrl: '',
    date: '2026-06-22',
    courseName: 'Interface Humano Computador',
    courseCode: 'FBI4021',
    room: 'Bloco 71 - 307',
    content: 'Pessoal, o material da próxima aula sobre Heurísticas de Nielsen já está disponível no AVA. Por favor, leiam antes da aula para que possamos ter uma discussão mais produtiva.',
    read: false,
  },
  {
    id: 'notice-2',
    professorName: 'Prof. Ricardo Oliveira',
    professorAvatarUrl: '',
    date: '2026-06-21',
    courseName: 'Banco de Dados II',
    courseCode: 'FBI0001',
    room: 'Bloco 71 - 405',
    content: 'Informo que a aula de quarta-feira (25/06) será realizada na sala 405 do Bloco 71, devido à manutenção no laboratório. Tragam os notebooks para a atividade prática.',
    read: false,
  },
  {
    id: 'notice-3',
    professorName: 'Prof. Fulano de Tal',
    professorAvatarUrl: '',
    date: '2026-06-20',
    courseName: 'Programação Orientada a Objetos',
    courseCode: 'FBI0000',
    room: 'Bloco 71 - 600',
    content: 'O prazo de entrega do Trabalho 02 foi prorrogado para o dia 02/07. Aproveitem o tempo extra para revisar os padrões de projeto abordados em aula.',
    read: false,
  },
]
