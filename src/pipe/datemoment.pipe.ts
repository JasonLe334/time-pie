import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({name: 'momentDate'})
export class momentDatePipe implements PipeTransform {
  transform(value: number, exponent = 1): string {
    let result: string = '';
    const duration = moment.duration(value);
    if(value >= 99999 && value < 999999){
      let tmp: number | string = duration.asSeconds();
      tmp = tmp % 1 > 0 ? tmp.toString().split('.')[0] : tmp.toLocaleString();
      result = tmp + 's';
    }else if(value >= 999999 && value < 9999999){
      let tmp: number | string = duration.asMinutes();
      tmp = tmp % 1 > 0 ? tmp.toString().split('.')[0] : tmp.toLocaleString();
      result = tmp + 'm';
    }else if(value >= 9999999){
      let tmp: number | string = duration.asHours();
      tmp = tmp % 1 > 0 ? tmp.toLocaleString().split('.')[0] : tmp.toLocaleString();
      result = tmp + 'h';
    }else if(value < 99999){
      let tmp: number | string = duration.asMilliseconds();
      tmp = tmp % 1 > 0 ? tmp.toLocaleString().split('.')[0] : tmp.toLocaleString();
      result = tmp + 'ms';
    }
    return result;
  }
}

