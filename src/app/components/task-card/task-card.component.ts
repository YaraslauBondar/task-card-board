import {Component, Input} from '@angular/core';
import {ITask} from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-card',
  standalone: false,
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {

  @Input() task!: ITask;
}
