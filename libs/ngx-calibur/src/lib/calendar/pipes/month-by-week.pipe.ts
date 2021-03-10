import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthByWeek',
})
export class MonthByWeekPipe implements PipeTransform {

  transform(value: Date[], ...args: unknown[]): unknown {
    return this.chunk(value, 7);
  }

  private chunk(arr: Date[], size: number) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size),
    );
  }

}
