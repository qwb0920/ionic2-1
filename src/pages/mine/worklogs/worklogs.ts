import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import { WorkLogsDetail } from './worklogsdetail/worklogsdetail';

import {HttpService} from '../../../providers/http.service';
import {LogonStatusService} from '../../../providers/logon-status.service';

import {ListPage} from '../../../providers/list-page';

@Component({selector: 'page-worklogs', templateUrl: 'worklogs.html'})
export class WorkLogs extends ListPage {
    public pageSize = 10;
    public UserID;
    public items = [];

    constructor(public navCtrl : NavController, public httpService : HttpService, public logonStatusService : LogonStatusService) {
        super();
    }

    ionViewDidLoad() {
        this.logonStatusService
            .getUserID()
            .then((userid) => {
                this.UserID = userid;
                console.log(this.UserID);
            })
    }

    ionViewWillEnter() {
        this.loadList();
    }

    loadList(event?, pageNo=1) {
        console.log("HttpService in");
        this.httpService
            .post("checklogs", {
                pageNo: pageNo,
                WorkBrief: '',
                pageSize: this.pageSize,
                InputUserId: this.UserID
            })
            .subscribe((data) => {
                this.handleData(event,data, pageNo, this.pageSize)
                console.log(data);
            }, error => console.log(error))
    }

    gotoLogDetail(item){
        console.log(item);
        this.navCtrl.push(WorkLogsDetail,{
            item:item
        })
    }
}