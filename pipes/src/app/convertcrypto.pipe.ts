import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertcrypto'
})
export class ConvertcryptoPipe implements PipeTransform {

  transform(value: number, type:string): unknown {
    switch(type){
      case 'BTC':
        return value/24015;
      case 'ETH':
        return value/1900;
      case 'SOL':
        return value/43990;
      default:
        return value;
    }
  }

}
