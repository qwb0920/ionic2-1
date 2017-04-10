import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MyApp } from '../../app/app.component';

import { LogonStatusService } from '../../providers/logon-status-service';

/**
 * Generated class for the Logon page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-logon',
  templateUrl: 'logon.html',
})
export class Logon {

  constructor(public navCtrl: NavController, public navParams: NavParams, public logonStatusService: LogonStatusService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Logon');
  }

  Logon(){
    this.logonStatusService.Logon();
    this.navCtrl.push(MyApp)
  }

}
