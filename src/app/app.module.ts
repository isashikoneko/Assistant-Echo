import { CommandPage } from './../pages/command/command';
import { SettingPage } from './../pages/setting/setting';
import { TimerPage } from './../pages/timer/timer';
import { CalendarPage } from './../pages/calendar/calendar';

import { SearchPage } from './../pages/search/search';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    CalendarPage,
    TimerPage,
    SettingPage, 
    CommandPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    CalendarPage,
    TimerPage,
    SettingPage, 
    CommandPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
