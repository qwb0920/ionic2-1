import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MyApp } from '../../app/app.component';
import { WorkLogs } from './worklogs/worklogs';
import { Settings } from './settings/settings'; 

import { LogonStatusService } from '../../providers/logon-status-service'

/**
 * Generated class for the Mine page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class Mine {
  public user ={
    UserID:'',
    OrgName:'',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public logonStatusService: LogonStatusService) {
      
  }

  ionViewDidLoad() {
    this.logonStatusService.getUser().then((val) => {
            this.user = val;
          });
  }

  WorkLogs(){
    this.navCtrl.push(WorkLogs);
  }

  Settings(){
    this.navCtrl.push(Settings);
  }

  Exit(){
    this.logonStatusService.Exit();
    this.navCtrl.push(MyApp);
  }

}
