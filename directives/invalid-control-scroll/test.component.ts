import { Component } from '@angular/core';
import { FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  template: `
    <form #form="ngForm" invalidControlScroll>
      <input type="text" name="name" id="name" required [(ngModel)]="name">
      <button type="submit">Submit</button>
    </form>
  `,
})
export class TestComponent {
  name: string;
}
