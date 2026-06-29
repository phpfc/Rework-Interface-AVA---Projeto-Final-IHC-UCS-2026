import type { ContentSummary } from '../types'

export const mockSummaries: ContentSummary[] = [
  {
    id: 'summary-1',
    courseId: 'course-1',
    title: 'Resumo - Personas e Heurísticas de Nielsen',
    videoUrl: '',
    description: 'Personas são representações fictícias de usuários reais, criadas a partir de dados de pesquisa, que ajudam a equipe de design a tomar decisões centradas no usuário. As 10 heurísticas de usabilidade de Nielsen fornecem princípios gerais para avaliação de interfaces, abrangendo desde a visibilidade do status do sistema até a ajuda e documentação. Juntas, essas ferramentas permitem projetar interfaces mais intuitivas, eficientes e alinhadas às necessidades dos usuários.',
  },
  {
    id: 'summary-2',
    courseId: 'course-2',
    title: 'Resumo - Herança, Polimorfismo e Padrões de Projeto',
    videoUrl: '',
    description: 'Herança permite que uma classe reutilize comportamentos de outra, estabelecendo uma hierarquia de tipos. Polimorfismo possibilita que objetos de classes diferentes respondam a uma mesma interface de maneiras distintas, favorecendo extensibilidade e baixo acoplamento. Padrões de projeto GoF (Gang of Four) são soluções recorrentes para problemas comuns no design orientado a objetos, divididos em padrões criacionais (Singleton, Factory), estruturais (Adapter, Decorator) e comportamentais (Observer, Strategy).',
  },
]
