import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-item-header',
  templateUrl: './timeline-item-header.component.html',
  styleUrls: ['./timeline-item-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineItemHeaderComponent {
  @Input() isSidebar = false;
}
