import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InvalidControlScrollDirective } from './invalid-control-scroll.directive';

describe('InvalidControlScrollDirective', () => {
  let directive: InvalidControlScrollDirective;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvalidControlScrollDirective, TestComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    directive = fixture.debugElement.nativeElement.querySelector('[invalidControlScroll]').injector.get(InvalidControlScrollDirective);
    fixture.detectChanges();
  });

  it('should scroll to the first invalid control on form submission', () => {
    const scrollToFirstInvalidControlSpy = spyOn(directive, 'scrollToFirstInvalidControl');
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');
    submitButton.click();
    expect(scrollToFirstInvalidControlSpy).toHaveBeenCalled();
  });

  // Additional test cases can be added to cover different scenarios
});