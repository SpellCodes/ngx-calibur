import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { addMonths, subMonths } from 'date-fns';

@Component({
  selector: 'xcb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  date = new Date();

  expo: {
    weekTpl: string | null;
    dayTpl: string | null;
  };

  @ViewChild('customWeekView', { static: true })
  customWeekView: TemplateRef<any>;

  @ViewChild('customDayView', { static: true })
  customDayView: TemplateRef<any>;

  ngOnInit() {
    this.expo = {
      weekTpl: 'customWeekView',
      dayTpl: 'customDayView'
    }
  }

  getTemplateRefFromName(name: string): TemplateRef<any> {
    switch (name) {
      case 'customWeekView':
        return this.customWeekView

      case 'customDayView':
        return this.customDayView

      default:
        return null
    }
  }

  onPreviousMonth() {
    this.date = subMonths(this.date, 1)
  }

  onCurrentMonth() {
    this.date = new Date()
  }

  onNextMonth() {
    this.date = addMonths(this.date, 1)
  }
}
