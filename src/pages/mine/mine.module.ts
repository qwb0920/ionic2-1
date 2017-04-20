import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Mine } from './mine';
import { WorkLogs } from './worklogs/worklogs';
import { WorkLogsDetail } from './worklogs/worklogsdetail/worklogsdetail';
import { Settings } from './settings/settings';

@NgModule({
  declarations: [
    Mine,
    WorkLogs,
    Settings,
    WorkLogsDetail,
  ],
  imports: [
    IonicModule,
  ],
  entryComponents: [
    Mine,
    WorkLogs,
    Settings,
    WorkLogsDetail,
  ],
  exports: [
    Mine,
  ]
})
export class MineModule {}
