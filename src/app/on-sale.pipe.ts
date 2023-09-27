import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {

    console.log('value,', value)
    if (value < 100) {
      return 'Re?'
    }
    return 'Dat'
  }

}
