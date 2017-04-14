import {Injectable} from '@angular/core';
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
  constructor(public http : Http) {}

  public post(method, content) {

    let params = this.handleParams(content);

    return this.http
      .post(ServiceRootPath + method, params)
      .timeout(5000)
      .map(res => {
        if (res.json().returnCode === 'SUCCESS') {
          return res.json().ResponseParams
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
