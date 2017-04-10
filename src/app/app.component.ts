import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';
import { Logon } from '../pages/logon/logon';

import { LogonStatusService } from '../providers/logon-status-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  // public rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,logonStatusService: LogonStatusService) {

    // storage.get('already-logged').then(result => {
    //   console.log(result)
    //   if(result){
    //     // 登录过账号，并且未注销。类似微信只需要登录一次，下次进入 App 不需要重复登录
    //     this.rootPage = TabsPage;
    //   }
    //   else{
    //     // APP 尚未登录账号
    //     // TODO:是否为第一次登录，第一次登录需开启功能介绍页
    //     this.rootPage = Logon;
    //   }
    // })
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // console.log("app.component.ts")
      // console.log(logonStatusService.getFirstInStatus())
      // logonStatusService.getFirstInStatus().then((firstIn) => {
      //   console.log(firstIn);
      // })

    });
  }
}
