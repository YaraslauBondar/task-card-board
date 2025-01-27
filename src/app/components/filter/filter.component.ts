import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: false,

  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  public choices: string[] = [
    'Все продукты', 'Название 1', 'Название 2', 'Название 3'
  ];
  @Input() control!: FormControl<string>;

  public isOpen: boolean = false;

  constructor() {}

  openSelection() {
    this.isOpen = !this.isOpen;
  }

  selectValue(choice: string) {
    this.control.setValue(choice);
    this.isOpen = false;
  }

}
