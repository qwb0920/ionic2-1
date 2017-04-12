import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Mine } from './mine';
import { WorkLogs } from './worklogs/worklogs';
import { Settings } from './settings/settings';

@NgModule({
  declarations: [
    Mine,
    WorkLogs,
    Settings,
  ],
  imports: [
    IonicModule,
  ],
  entryComponents: [
    Mine,
    WorkLogs,
    Settings,
  ],
  exports: [
    Mine,
  ]
})
export class MineModule {}
