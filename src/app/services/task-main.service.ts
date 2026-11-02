import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ITask} from '../interfaces/task.interface';
import {mockTasks} from '../consts/tasks.mock';
import {TaskStateEnum} from '../enums/task.type.enum';

@Injectable({
  providedIn: 'root'
})
export class TaskMainService {

  public user: string = 'Вильгельмина Ш.';

  public coordinationTasksLength = 0;
  public reviewTasksLength = 0;
  public currentTasksLength = 0;
  public templatesTasksLength = 0;

  private tasks: ITask[] = structuredClone(mockTasks);

  public mainTasksSubject = new BehaviorSubject<ITask[] | null>(null);
  public mainTasks$: Observable<ITask[] | null> = this.mainTasksSubject.asObservable();

  public getTasks(): Observable<ITask[]> {
    this.emit();
    return of(this.tasks);
  }

  /** Взять задачу в работу; задача, которая была в работе, ставится на паузу. */
  public startTask(id: number): void {
    this.tasks.forEach(task => {
      if (task.stages.current === 'work') task.stages.current = 'paused';
    });
    this.update(id, task => {
      task.stages.current = 'work';
      task.user ??= {text: this.user, icon: 'account-logo.svg'};
    });
  }

  public pauseTask(id: number): void {
    this.update(id, task => task.stages.current = 'paused');
  }

  /** Завершить текущий этап (или принять задачу) и перейти к следующему. */
  public completeStage(id: number): void {
    this.update(id, task => {
      task.stages.passed = Math.min(task.stages.total, task.stages.passed + 1);
      task.stages.current = null;
    });
  }

  /** Вернуть задачу на предыдущий этап. */
  public returnStage(id: number): void {
    this.update(id, task => {
      task.stages.passed = Math.max(0, task.stages.passed - 1);
      task.stages.current = null;
    });
  }

  private update(id: number, change: (task: ITask) => void): void {
    const task = this.tasks.find(t => t.id === id);
    if (!task) return;
    change(task);
    this.emit();
  }

  private emit(): void {
    const tasks = this.tasks;
    this.coordinationTasksLength = tasks.filter(t => t.state === TaskStateEnum.coordination).length;
    this.reviewTasksLength = tasks.filter(t => t.state === TaskStateEnum.review).length;
    this.currentTasksLength = tasks.filter(t =>
      !t.stages.current && (!t.user || t.user.text === this.user)).length;
    this.mainTasksSubject.next([...tasks]);
  }
}
