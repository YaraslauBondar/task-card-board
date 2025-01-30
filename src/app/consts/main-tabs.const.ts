import {ITab} from '../interfaces/task.interface';

export const mainTabs: ITab[] = [
  {
    text: 'На согласование',
    link: '/coordination',
  },
  {
    text: 'На ревью',
    link: '/review',
  },
  {
    text: 'В работе',
    link: '/current',
  },
  {
    text: 'Черновики',
    link: '/templates',
  }
]

export const routes: ITab[] = [
  {
    text: 'Главная',
    link: '/',
    icon: 'main-logo.svg'
  },
  {
    text: 'Проекты',
    link: '/projects',
    icon: 'projects-logo.svg'
  },
  {
    text: 'Команда',
    link: '/team',
    icon: 'team-logo.svg'
  },
  {
    text: 'Канбан',
    link: '/kanban',
    icon: 'kanban-logo.svg'
  },
  {
    text: 'Итерации',
    link: '/calendar',
    icon: 'calendar-logo.svg'
  },
]
