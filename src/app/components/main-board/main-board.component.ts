import { Component } from '@angular/core';

@Component({
  selector: 'app-main-board',
  standalone: false,

  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.scss'
})
export class MainBoardComponent {

  public tabs = [
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

}
