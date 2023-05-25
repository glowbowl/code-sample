import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeBasic } from '../../interfaces/select-item.model';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(value: EmployeeBasic): string {
    if (!value || !value.firstName || !value.lastName) {
      return '';
    }
    return `${value.firstName} ${value.lastName}`;
  }
}
