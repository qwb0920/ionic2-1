import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MyApp } from '../../app/app.component';

import { LogonStatusService } from '../../providers/logon-status-service'

/**
 * Generated class for the Mine page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class Mine {

  constructor(public navCtrl: NavController, public navParams: NavParams, public logonStatusService: LogonStatusService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mine');
  }

  Exit(){
    this.logonStatusService.Exit();
    // this.navCtrl.push(MyApp);
  }

}
