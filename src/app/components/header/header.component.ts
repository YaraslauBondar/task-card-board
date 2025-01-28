import { Component } from '@angular/core';
import {routes} from '../../consts/main-tabs.const';
import {ITab} from '../../interfaces/task.interface';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public time: string = '10:00';
  public routes: ITab[] = routes;

}
