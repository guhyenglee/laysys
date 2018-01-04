import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about'; 
import { ContactPage } from '../pages/contact/contact'; // unused
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { StatPage } from '../pages/stat/stat';
import { MessagePage } from '../pages/message/message';
import { NoticePage } from '../pages/notice/notice';
import { SettingPage } from '../pages/setting/setting';
import { FindPage } from '../pages/find/find';
import { DataPage } from '../pages/data/data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StatPage,
    MessagePage,
    NoticePage,
    FindPage,
    DataPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StatPage,
    MessagePage,
    NoticePage,
    FindPage,
    DataPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
