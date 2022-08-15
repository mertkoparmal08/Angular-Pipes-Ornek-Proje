import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertheat'
})
export class ConvertheatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return (value- 17.22);
  }

}
