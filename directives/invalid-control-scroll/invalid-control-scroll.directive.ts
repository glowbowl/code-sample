import { Directive, HostListener, ElementRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[invalidControlScroll]',
})
export class InvalidControlScrollDirective {
  constructor(private el: ElementRef, private formGroupDir: FormGroupDirective) {}

  @HostListener('ngSubmit') onSubmit(): void {
    if (this.formGroupDir.control.invalid) {
      this.scrollToFirstInvalidControl();
    }
  }

  private scrollToFirstInvalidControl(): void {
    const firstInvalidElement = this.el.nativeElement.querySelector('.ng-invalid[id]');
    if (firstInvalidElement) {
      firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstInvalidElement.focus({ preventScroll: true });
    }
  }
}
