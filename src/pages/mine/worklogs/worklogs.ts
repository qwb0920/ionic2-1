import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {HttpService} from '../../..//providers/http.service';
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
        console.log('ionViewDidLoad enter')
        this
            .logonStatusService
            .getUserID()
            .then((userid) => {
                this.UserID = userid;
            })
console.log('ionViewDidLoad out')
    }

    ionViewWillEnter() {
        console.log('ionViewWillEnter enter')
        this.loadList();
        console.log('ionViewWillEnter out')
    }

    loadList(event
        ?, pageNo = 1) {
        this
            .httpService
            .post("checklogs", {
                pageNo: pageNo,
                WorkBrief: '',
                pageSize: this.pageSize,
                InputUserId: this.UserID
            })
            .subscribe((data) => {
                console.log(data);
                if (pageNo == 1) {
                    this.items = [];
                }
                for (let i = 0; i < data.array.length; i++) {

                    this
                        .items
                        .push(data.array[i]);

                }
                if (event) {
                    event.complete();
                }

            }, error => console.log(error))

    }
}