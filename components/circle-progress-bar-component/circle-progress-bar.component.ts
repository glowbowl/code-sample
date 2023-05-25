import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LoadBgColor, LoadColor } from '../../enums/load-colors.enum';

@Component({
  selector: 'app-circle-progress-bar',
  templateUrl: './circle-progress-bar.component.html',
  styleUrls: ['./circle-progress-bar.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CircleProgressBarComponent implements OnChanges {
  @Input() percent = 0;
  @Input() size = 150;
  @Input() stroke = 5;

  public strokeColor: string;
  public strokeColorBg: string;

  constructor() {
    this.updateStrokeColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.percent) {
      this.updateStrokeColor();
    }
  }

  private updateStrokeColor(): void {
    if (this.percent < 40) {
      this.strokeColor = LoadColor.GREEN;
      this.strokeColorBg = LoadBgColor.GREEN_BG;
    } else if (this.percent >= 40 && this.percent < 80) {
      this.strokeColor = LoadColor.YELLOW;
      this.strokeColorBg = LoadBgColor.YELLOW_BG;
    } else {
      this.strokeColor = LoadColor.RED;
      this.strokeColorBg = LoadBgColor.RED_BG;
    }
  }
}
