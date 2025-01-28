import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject, tap} from 'rxjs';
import {ITask} from '../interfaces/task.interface';
import {mockTasks} from '../consts/tasks.mock';
import {TaskStateEnum} from '../enums/task.type.enum';

@Injectable({
  providedIn: 'root'
})
export class TaskMainService {

  public user: string = 'Вильгельмина Ш.';

  public coordinationTasksLength!: number;
  public reviewTasksLength!: number;
  public currentTasksLength!: number;
  public templatesTasksLength!: number;

  public mainTasksSubject: Subject<ITask[] | null> = new BehaviorSubject<ITask[] | null>(null);
  public mainTasks$: Observable<ITask[] | null> = this.mainTasksSubject.asObservable();

  constructor() { }

  public getTasks(): Observable<ITask[]> {
    this.mainTasksSubject.next(mockTasks);
    of(mockTasks).subscribe(tasks => {
      this.coordinationTasksLength =
        tasks.filter(task => task.state === TaskStateEnum.coordination)?.length;
      this.reviewTasksLength =
        tasks.filter(task => task.state === TaskStateEnum.review)?.length;
      this.currentTasksLength =
        tasks.filter(task =>
          (!task.stages.current && task.user?.text === this.user) ||
          (!task.stages.current && !task.user))?.length;
        })
    return of(mockTasks);
  }

}
