import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
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

  private destroyRef = inject(DestroyRef);

  constructor(
    public taskMainService: TaskMainService
  ) {
  }

  ngOnInit() {
    this.taskMainService.mainTasksSubject
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(tasks => {
      this.workTasks = tasks?.filter(task => task.stages.current === 'work') || [];
      this.pausedTasks = tasks?.filter(task => task.stages.current === 'paused') || [];
    })
  }

}
