import {Component, inject, Input} from '@angular/core';
import {TaskMainService} from '../../services/task-main.service';
import {ITask} from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-card',
  standalone: false,
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {

  @Input() task!: ITask;

  private taskService = inject(TaskMainService);

  start() { this.taskService.startTask(this.task.id); }
  pause() { this.taskService.pauseTask(this.task.id); }
  complete() { this.taskService.completeStage(this.task.id); }
  fix() { this.taskService.returnStage(this.task.id); }
}
