import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Logon } from '../pages/logon/logon';

import { LogonStatusService } from '../providers/logon-status-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  public rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public logonStatusService: LogonStatusService) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      logonStatusService.getFirstInStatus().then((status) => {
        console.log(status)
        // firstIn
        if(status === null || status === true){
          //  第一次进入应用
          console.log("首次进入应用");
          // TODO:增加应用功能介绍滑动页
          this.rootPage = Logon;
        }else{
          //  不是首次进入应用，但是无法确定是否登录
          console.log("再次进入应用");
          logonStatusService.getLogonStatus().then((status) => {
            // logon
            if(status === null || status === false){
              this.rootPage = Logon;
            }else{
              this.rootPage = TabsPage;
            }
          })
        }
      })
    });
  }

  
}
