import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ServiceRootPath, UUID, DeviceType } from './config';

/*
  Generated class for the HttpService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpService {

  constructor(public http: Http) {
    console.log('Hello HttpService Provider');
  }

  public post(method,content){
    console.log(ServiceRootPath+method);

    content.UUID = UUID;

    let temp  = {
        deviceType:DeviceType,
        RequestParams:content,
    }
    let params = JSON.stringify(temp);

    return this.http.post(ServiceRootPath+method,params).map(res=>{
      if(res.json().returnCode === 'SUCCESS'){
         return res.json().ResponseParams
      }else{
        console.log("网络请求失败");
      }
      
    })
  }
}
