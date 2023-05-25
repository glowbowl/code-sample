import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InvalidControlScrollDirective } from './invalid-control-scroll.directive';

@NgModule({
  declarations: [InvalidControlScrollDirective],
  exports: [InvalidControlScrollDirective],
  imports: [CommonModule],
})
export class InvalidControlScrollModule {}
