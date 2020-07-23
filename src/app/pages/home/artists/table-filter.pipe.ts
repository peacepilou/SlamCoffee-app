import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { NgModel } from '@angular/forms';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: Artist[], value: string) {

    return value ? list.filter(item => item.type === value) : list;
  }

}
