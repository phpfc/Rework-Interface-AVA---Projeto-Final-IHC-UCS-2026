import type { Assignment } from '../types'

export const mockAssignments: Assignment[] = [
  {
    id: 'assignment-1',
    courseId: 'course-1',
    courseName: 'Interface Humano Computador',
    courseCode: 'FBI4021',
    professorName: 'Prof.ª Elisa Boff',
    title: 'Trabalho 01 - Avaliação Heurística',
    description:
      'Realize uma avaliação heurística de um sistema interativo à sua escolha, aplicando as 10 heurísticas de usabilidade de Nielsen. O relatório deve conter: descrição do sistema avaliado, metodologia utilizada, problemas encontrados classificados por severidade, e sugestões de melhoria para cada problema identificado. Entrega em formato PDF pelo AVA.',
    dueDate: '2026-07-01',
    status: 'pendente',
    maxScore: 10,
    attachments: [
      { name: 'Template do Relatório.docx', url: '#' },
      { name: 'Exemplo de Avaliação Heurística.pdf', url: '#' },
    ],
  },
  {
    id: 'assignment-2',
    courseId: 'course-2',
    courseName: 'Programação Orientada a Objetos (Turma X)',
    courseCode: 'FBI0000',
    professorName: 'Prof. Fulano de Tal',
    title: 'Trabalho 02 - Padrões de Projeto',
    description:
      'Implemente um sistema em Java que utilize pelo menos 3 padrões de projeto (Design Patterns) do catálogo GoF. O sistema deve resolver um problema real e incluir diagrama de classes UML, código fonte documentado e um relatório explicando a escolha de cada padrão e como ele foi aplicado.',
    dueDate: '2026-07-02',
    status: 'pendente',
    maxScore: 10,
    attachments: [
      { name: 'Lista de Padrões GoF.pdf', url: '#' },
    ],
  },
]
