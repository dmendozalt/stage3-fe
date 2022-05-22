import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dinamycLabel',
})
export class DinamycLabelPipe implements PipeTransform {
  transform(value: unknown, ...args: string[]): unknown {
    return args.shift()?.slice(0, -1);
  }
}
