import { Pipe, PipeTransform } from '@angular/core';
import { Fellow } from 'src/interfaces';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: Array<Fellow>, key: number): Array<Fellow> {
    if (!Array.isArray(value)) {
      return [];
    }
    value.sort((a: Fellow, b: Fellow) => {
      return key == 1
        ? b.name < a.name
          ? 1
          : -1
        : key == 2
        ? b.name < a.name
          ? -1
          : 1
        : key == 3
        ? a.office > b.office
          ? 1
          : -1
        : key == 4
        ? a.office < b.office
          ? 1
          : -1
        : 1;
    });
    return value;
  }
}
