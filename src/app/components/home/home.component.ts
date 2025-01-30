import {Component, OnInit} from '@angular/core';
import {TaskMainService} from '../../services/task-main.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {categories, products} from '../../consts/filter-options.const';
import {ITaskInfo} from '../../interfaces/task.interface';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public product!: FormControl<string | null>;
  public category!: FormControl<string | null>;

  public productOptions: string[] = products;
  public categoryOptions: string[] = categories;

  public currentTask!: ITaskInfo;

  constructor(
    public taskMainService: TaskMainService,
  ) {
  }

  ngOnInit() {
    this.product = new FormControl('');
    this.category = new FormControl('');

    this.taskMainService.getTasks().subscribe(tasks => {
      const currentTask = tasks.filter(el =>
        el.stages.current === 'work')[0];
      this.currentTask = {
        icon: currentTask.icon,
        text: currentTask.title
      }
    });
  }
}
