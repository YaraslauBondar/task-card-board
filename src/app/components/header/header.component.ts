import {Component, Input} from '@angular/core';
import {routes} from '../../consts/main-tabs.const';
import {ITab, ITaskInfo} from '../../interfaces/task.interface';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() currentTask!: ITaskInfo;

  public time: string = '10:00';
  public routes: ITab[] = routes;

}
