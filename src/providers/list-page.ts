import {OnInit} from '@angular/core';
import {LogonStatusService} from './';

export class ListPage implements OnInit {

  public pageNo=1;
  public infiniteScroll;

  ngOnInit() {
    console.log("ngOnInit")
  }

  doRefresh(event) {
    this.pageNo = 1;
    this.loadList(event,this.pageNo++);

    if(this.infiniteScroll){
      this.infiniteScroll.enable(true);
    }
  }

  loadList(event, pageNo?) {}

  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll
    console.log(infiniteScroll);

    console.log(this.pageNo);

    this.loadList(infiniteScroll, this.pageNo);
    this.pageNo++;

  }

  complete(event,currentArrayLength,currentPageNo,pageSize,totalCount){
    
    if(event){
      event.complete();
    }
    console.log(event,currentArrayLength,currentPageNo,pageSize,totalCount);
    if(currentArrayLength < pageSize || currentPageNo*pageSize == totalCount){
      // 到了最后一页
      event.enable(false);
    }
  }

}