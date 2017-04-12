import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {HttpService} from '../../..//providers/http-service';
import {LogonStatusService} from '../../..//providers/logon-status-service';

@Component({selector: 'page-worklogs', templateUrl: 'worklogs.html'})
export class WorkLogs {
    public pageSize = 8;
    public UserID;
    public items;

    constructor(public navCtrl : NavController, public httpService : HttpService, public logonStatusService : LogonStatusService) {}

    ionViewDidLoad() {
        this.logonStatusService
            .getUserID()
            .then((userid) => {
                this.UserID = userid;
            })
    }

    ionViewWillEnter() {
        this.httpService
            .post("checklogs", {
                pageNo: 1,
                WorkBrief:'',
                pageSize: this.pageSize,
                InputUserId: this.UserID
            })
            .subscribe((data) => {
                console.log(data);
                this.items = data.array;
            }, error => console.log(error))
    }
}
