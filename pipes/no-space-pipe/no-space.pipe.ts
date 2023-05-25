import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noSpace',
  standalone: true,
})
export class NoSpacePipe implements PipeTransform {
  public transform(value: string | null): string {
    return value ? value.replace(/ /g, '') : '';
  }
}
