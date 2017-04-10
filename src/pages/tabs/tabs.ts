import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { Query } from '../query/query'
import { Mine } from '../mine/mine';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = Query;
  tab4Root = Mine;

  constructor() {

  }
}
