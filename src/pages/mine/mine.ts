import {Component, Input} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {NavController, NavParams} from 'ionic-angular';

import {MyApp} from '../../app/app.component';
import {WorkLogs} from './worklogs/worklogs';
import {Settings} from './settings/settings';

import {LogonStatusService} from '../../providers/logon-status.service';

/**
 * Generated class for the Mine page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
  animations: [trigger('scaleState', [
      state('inactive', style({transform: 'scale(1)'})),
      state('active', style({transform: 'scale(1.1)'})),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])]
})
export class Mine {

  color = "green";

  public user = {
    UserID: '',
    OrgName: ''
  };

  public mine = {
    state: "inactive"
  }

  constructor(public navCtrl : NavController, public navParams : NavParams, public logonStatusService : LogonStatusService) {}

  ionViewDidLoad() {
    this
      .logonStatusService
      .getUser()
      .then((val) => {
        this.user = val;
      });
  }

  WorkLogs() {
    this
      .navCtrl
      .push(WorkLogs);
  }

  changeState() {
    if (this.mine.state === "inactive") {
      this.mine.state = "active";
    } else {
      this.mine.state = "inactive";
    }
  }

  Settings() {
    this
      .navCtrl
      .push(Settings,null,{
        animate:false,
      });
  }

  Exit() {
    this
      .logonStatusService
      .Exit();
    this
      .navCtrl
      .push(MyApp);
  }

}
