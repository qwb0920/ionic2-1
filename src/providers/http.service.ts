import {Injectable} from '@angular/core';
import {LoadingController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

import {ServiceRootPath, UUID, DeviceType} from './config';

/*
  Generated class for the HttpService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpService {
  private loader;

  constructor(public http : Http, public loadingCtrl : LoadingController) {
    console.log('Hello HttpService Provider');
  }

  private showLoading() {
    let loader = this
      .loadingCtrl
      .create({content: "请稍等。。。", duration: 5000});
    loader.present();
    return loader;
  }

  public post(method, content) {
    this.loader = this.showLoading();

    let params = this.handleParams(content);

    return this
      .http
      .post(ServiceRootPath + method, params)
      .timeout(5000)
      .map(res => {
        if (res.json().returnCode === 'SUCCESS') {
          this
            .loader
            .dismissAll();
          return res
            .json()
            .ResponseParams
        } else {
          console.log("接口请求失败");
        }
      })
  }

  private handleParams(content) : string {
    content.UUID = UUID;

    let temp = {
      deviceType: DeviceType,
      RequestParams: content
    };
    let params = JSON.stringify(temp);
    return params;
  }
}
