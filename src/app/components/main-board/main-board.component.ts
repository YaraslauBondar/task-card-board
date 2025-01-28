import { Component } from '@angular/core';
import {TaskMainService} from '../../services/task-main.service';
import {mainTabs} from '../../consts/main-tabs.const';
import {ITab} from '../../interfaces/task.interface';

@Component({
  selector: 'app-main-board',
  standalone: false,

  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.scss'
})
export class MainBoardComponent {

  public tabs: ITab[] = mainTabs;

  constructor(
    public taskMainService: TaskMainService
  ) {
  }

  getLength(option: string): number {
    return option === '/current' ?
      this.taskMainService.currentTasksLength
      : option === '/coordination' ?
        this.taskMainService.coordinationTasksLength
        : option === '/review' ?
          this.taskMainService.reviewTasksLength
          : option === '/templates' ?
            this.taskMainService.templatesTasksLength
            : 0;

  }

}
