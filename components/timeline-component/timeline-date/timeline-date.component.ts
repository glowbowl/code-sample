import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-timeline-date',
  templateUrl: './timeline-date.component.html',
  styleUrls: ['./timeline-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineDateComponent {}
