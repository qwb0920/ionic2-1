import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HttpService} from '../../../../providers/http.service';

/**
 * Generated class for the Query page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({selector: 'page-worklogsdetail', templateUrl: 'worklogsdetail.html'})
export class WorkLogsDetail {

    public item;

    constructor(public navCtrl : NavController, public navParams : NavParams, public httpSerivce : HttpService) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad WorkLogsDetail');
        this.item = this
            .navParams
            .get("item");

    }

    ionViewWillEnter() {
        this.httpSerivce.post("checklogInfo",{
            SerialNo:this.item.SerialNo
        }).subscribe((data) => {
            console.log(data);
        })


        this.httpSerivce.post("getWorkType",{
            CodeNo:"WorkType"
        }).subscribe((data) => {
            console.log(data);
        })
    }

}
