import {OnInit} from '@angular/core';

export class ListPage implements OnInit {

  public pageNo = 1;

  ngOnInit() {
    console.log("ngOnInit")
  }

  doRefresh(event) {
    this.pageNo = 1;
    this.loadList(event,this.pageNo);
  }

  loadList(event, pageNo?) {}

  doInfinite(event) {
    console.log(event);
    console.log("1111111");
    console.log(this.pageNo);
    console.log("22222222");
    this.loadList(event, this.pageNo);
    this.pageNo++;

  }

}