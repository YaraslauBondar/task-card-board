import {Component, OnInit} from '@angular/core';
import {TaskMainService} from '../../services/task-main.service';
import {ITask} from '../../interfaces/task.interface';

@Component({
  selector: 'app-right-board',
  standalone: false,

  templateUrl: './right-board.component.html',
  styleUrl: './right-board.component.scss'
})
export class RightBoardComponent implements OnInit {

  public workTasks: ITask[] = [];
  public pausedTasks: ITask[] = [];

  constructor(
    public taskMainService: TaskMainService
  ) {
  }

  ngOnInit() {
    this.taskMainService.mainTasksSubject.subscribe(tasks => {
      this.workTasks = tasks?.filter(task => task.stages.current === 'work') || [];
      this.pausedTasks = tasks?.filter(task => task.stages.current === 'paused') || [];
    })
  }

}
