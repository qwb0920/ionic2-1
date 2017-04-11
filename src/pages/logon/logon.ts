import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';

import { MyApp } from '../../app/app.component';

import { LogonStatusService } from '../../providers/logon-status-service';
import { HttpService } from '../../providers/http-service';

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
  public logonForm;

  constructor(public navCtrl: NavController,  public logonStatusService: LogonStatusService, public formBuilder: FormBuilder, public httpService: HttpService) {
    this.logonForm = this.formBuilder.group({
      UserId: ["test11", [Validators.required, Validators.minLength(4)]],// 第一个参数是默认值
      UserPwd: ["000000als", [Validators.required, Validators.minLength(4)]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Logon');
  }

  Logon(user){
    console.log(user);
    // this.navCtrl.push(MyApp);
    
    this.httpService.post('logon',user).subscribe((data) => {
      if(data.Result === 'Y'){
          // 登录成功
          console.log(data.user);
          this.logonStatusService.Logon();
          this.navCtrl.push(MyApp,null,{animation:'ios-transition'});
      }else{
        console.log('登录失败');
      }
    })
  }

}
