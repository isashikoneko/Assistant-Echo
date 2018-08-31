
import { CalendarPage } from './../calendar/calendar';

import { SearchPage } from './../search/search';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimerPage } from '../timer/timer';
import { SettingPage } from '../setting/setting';
import { CommandPage } from '../command/command';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  search:any;
  command:any;
  calendar:any;
  timer:any;
  setting:any;

  constructor(public navCtrl: NavController) {
    this.search = SearchPage;
    this.command = CommandPage;
    this.calendar = CalendarPage;
    this.timer = TimerPage;
    this.setting = SettingPage; 
  }

}
