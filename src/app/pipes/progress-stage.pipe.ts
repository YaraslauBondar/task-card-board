import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'progressStage', standalone: false})
export class ProgressStage implements PipeTransform {
  transform(value: number, arg0:number, arg1: 'work' | 'paused' | null) : any {
    let res = [];
    for (let i = 1; i <= value; i++) {
      res.push({
        id: i,
        type: i <= arg0 ? 'ready' : i-1 === arg0 && arg1 ? arg1 : 'progress',
      });
    }
    return res;
  }
}
