import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(_num:number, _degree: number): number {
    return Math.pow(_num,_degree);
  }
}
