import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqroot'
})
export class SqrootPipe implements PipeTransform {

  transform(_num:number): number {
    return parseFloat(Math.sqrt(_num).toFixed(1));
  }
}
