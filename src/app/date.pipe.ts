import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any): any {
    var timeElapsed = (value).fromNow()
    return timeElapsed
  }

}