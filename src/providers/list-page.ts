import {OnInit} from '@angular/core';

export class ListPage implements OnInit {

  public pageNo = 1;
  public infiniteScroll;
  public noData : boolean;
  public items = [];

  ngOnInit() {
    this.noData = false;
    console.log("ngOnInit")
  }

  /**
 * 下拉刷新页面
 * @param event
 */
  doRefresh(event) {
    this.pageNo = 1;
    this.loadList(event, this.pageNo++);

    // 在加载到最后一页，上拉加载的功能会被禁用。在刷新页面时，将上拉加载功能重新启用
    if (this.infiniteScroll) {
      this
        .infiniteScroll
        .enable(true);
    }
  }

  loadList(event, pageNo) {}

  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll
    console.log(infiniteScroll);

    console.log(this.pageNo);

    this.loadList(infiniteScroll, this.pageNo);
    this.pageNo++;

  }

  handleData(event, data, pageNo, pageSize) {

    if (event) {
      // 结束本次页面操作，包括上拉加载和下拉刷新
      event.complete();
    } else {
      // 没有event传入，此处为进入页面第一次加载listpage
      this.pageNo++;
    }

    if (pageNo == 1) {
      this.items = [];
    }
    for (let i = 0; i < data.array.length; i++) {
      this
        .items
        .push(data.array[i]);
    }
    console.log(event, data, data.array.length, pageNo, pageSize);
    if (data.totalCount == 0) {
      this.noData = true;
      return
    }
    if (data.array.length < pageSize || pageNo * pageSize == data.totalCount) {
      // 到了最后一页
      event.enable(false);
    }
  }

}