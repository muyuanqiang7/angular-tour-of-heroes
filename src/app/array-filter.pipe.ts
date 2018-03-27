import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'arrayFilter',
  pure: false
})
export class ArrayFilterPipe implements PipeTransform {
  tmp = [];

  transform(value: any, args?: any): any {
    this.tmp.length = 0;
    const arr = value.filter(element => element % 2 === 0);
    for (let i = 0; i < arr.length; i++) {
      this.tmp.push(arr[i]);
    }
    return this.tmp;
  }

}
