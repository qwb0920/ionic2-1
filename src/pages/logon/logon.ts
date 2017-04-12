import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,  public logonStatusService: LogonStatusService, public formBuilder: FormBuilder, 
  public httpService: HttpService, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.logonForm = this.formBuilder.group({
      UserId: ["test11", [Validators.required, Validators.minLength(4)]],// 第一个参数是默认值
      UserPwd: ["000000als", [Validators.required, Validators.minLength(4)]]
    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: '网络请求超时',
      subTitle: '请再次检查你的网络配置',
      buttons: ['确定']
    });
    alert.present();
  }

  showLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 4500
    });
    loader.present();
    return loader;
  }

  Logon(user){
    // this.navCtrl.push(MyApp);
    let loader = this.showLoading();
    this.httpService.post('logon',user).subscribe(
      data => {
      if(data.Result === 'Y'){
          // 登录成功
          console.log(data.user);
          loader.dismissAll();
          this.logonStatusService.LogonSucc();
          this.navCtrl.push(MyApp);
          
      }else{
        console.log('登录失败');
        this.logonStatusService.LogonFail();
      }
    },
    error => {
      this.showAlert();
      console.log(error);
    })
  }

}
