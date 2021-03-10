import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyViewComponent } from './components/monthly-view/monthly-view.component';
import { MonthByWeekPipe } from './pipes/month-by-week.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [MonthlyViewComponent, MonthByWeekPipe],
  exports: [MonthlyViewComponent, MonthByWeekPipe],
})
export class CalendarModule { }
