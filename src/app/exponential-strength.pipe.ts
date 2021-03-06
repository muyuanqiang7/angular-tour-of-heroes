import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(element => element.num > 2);
  }

}
