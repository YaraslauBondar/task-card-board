import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public time: string = '10:00';

  public routes = [
    {
      id: 1,
      text: 'Главная',
      link: '/home',
      icon: 'main-logo.svg'
    },
    {
      id: 2,
      text: 'Проекты',
      link: '/projects',
      icon: 'projects-logo.svg'
    },
    {
      id: 3,
      text: 'Команда',
      link: '/team',
      icon: 'team-logo.svg'
    },
    {
      id: 4,
      text: 'Канбан',
      link: '/kanban',
      icon: 'kanban-logo.svg'
    },
    {
      id: 5,
      text: 'Итерации',
      link: '/calendar',
      icon: 'calendar-logo.svg'
    },
  ];

}
