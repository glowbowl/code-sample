import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-timeline-item-content',
  templateUrl: './timeline-item-content.component.html',
  styleUrls: ['./timeline-item-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineItemContentComponent {}
