import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from '../../app/app.component';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Logon');
  }

  logon(){
    this.storage.ready().then(() => {
       this.storage.set('already-logged', 'true');
     });

     this.navCtrl.push(MyApp);
  }

}
