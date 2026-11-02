import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TaskMainService} from '../../services/task-main.service';
import {ITask} from '../../interfaces/task.interface';

@Component({
  selector: 'app-current-tasks',
  standalone: false,

  templateUrl: './current-tasks.component.html',
  styleUrl: './current-tasks.component.scss'
})
export class CurrentTasksComponent implements OnInit {

  public isOpenMyTasks: boolean = true;
  public isOpenOtherTasks: boolean = true;

  public myTasks: ITask[] = [];
  public otherTasks: ITask[] = [];

  private destroyRef = inject(DestroyRef);

  constructor(
    public taskMainService: TaskMainService
  ) {
  }

  ngOnInit() {
    this.taskMainService.mainTasksSubject
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(tasks => {
      this.myTasks = tasks?.filter(task =>
        !task.stages.current && task.user?.text === this.taskMainService.user
      ) || [];

      this.otherTasks = tasks?.filter(task =>
        !task.stages.current && !task.user
      ) || [];
    })
  }

  openMyTasks() {
    this.isOpenMyTasks = !this.isOpenMyTasks;
  }

  openOtherTasks() {
    this.isOpenOtherTasks = !this.isOpenOtherTasks;
  }

}
