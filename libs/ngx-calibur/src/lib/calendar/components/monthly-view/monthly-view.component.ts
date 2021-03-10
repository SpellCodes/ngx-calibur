import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { eachDayOfInterval, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from 'date-fns';
import type { TemplateRef } from '@angular/core';

@Component({
  selector: 'xcb-monthly-view',
  templateUrl: './monthly-view.component.html',
  styleUrls: ['./monthly-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthlyViewComponent {

  @Input()
  date: Date = new Date();

  @Input()
  dayTemplate: TemplateRef<any>

  @Input()
  weekTemplate: TemplateRef<any>

  get daysInView(): Date[] {
    return eachDayOfInterval({
      start: startOfWeek(startOfMonth(this.date), { weekStartsOn: 1 }),
      end: endOfWeek(endOfMonth(this.date), { weekStartsOn: 1 }),
    });
  }

}
