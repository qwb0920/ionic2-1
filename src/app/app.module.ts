import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MineModule } from '../pages/mine/mine.module';
import { QueryModule } from '../pages/query/query.module';
import { Logon } from '../pages/logon/logon';

import { HttpService, LogonStatusService } from '../providers';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Calendar } from '@ionic-native/calendar';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    Logon
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:"true",
      mode: 'ios',//android是'md'
      backButtonText: '返回'
    }),
    QueryModule,
    MineModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    Logon
  ],
  providers: [
    Calendar,
    StatusBar,
    SplashScreen,
    Storage,
    LogonStatusService,
    HttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
