import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class TimelineItemComponent implements OnInit {
  @Input() isSidebar = false;
  @Input() currentIndex: number;
  @Input() isActive = false;

  @HostBinding('style.display') display = 'unset';

  public ngOnInit(): void {
    this.display = this.isSidebar ? 'flex' : 'unset';
  }
}
