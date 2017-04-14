import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {HttpService} from '../../..//providers/http.service';
import {LogonStatusService} from '../../../providers/logon-status.service';

import {ListPage} from '../../../providers/list-page';

@Component({selector: 'page-worklogs', templateUrl: 'worklogs.html'})
export class WorkLogs extends ListPage {
    public pageSize = 8;
    public UserID;
    public items = [];

    constructor(public navCtrl : NavController, public httpService : HttpService, public logonStatusService : LogonStatusService) {
        super();

    }

    ionViewDidLoad() {
        this
            .logonStatusService
            .getUserID()
            .then((userid) => {
                this.UserID = userid;
                console.log(this.UserID);
            })
    }

    ionViewWillEnter() {

        this.loadList(null, this.pageNo++);
    }

    loadList(event
        ?, pageNo
        ?) {
        console.log("HttpService in");
        this
            .httpService
            .post("checklogs", {
                pageNo: pageNo,
                WorkBrief: '',
                pageSize: this.pageSize,
                InputUserId: this.UserID
            })
            .subscribe((data) => {
                this.complete(event, data.array.length, pageNo, this.pageSize, data.totalCount)
                console.log(data);
                if (pageNo == 1) {
                    this.items = [];
                }
                for (let i = 0; i < data.array.length; i++) {

                    this
                        .items
                        .push(data.array[i]);

                }

            }, error => console.log(error))

    }
}