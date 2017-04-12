import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Mine } from './mine';
import { Settings } from './settings/settings';

@NgModule({
  declarations: [
    Mine,
    Settings,
  ],
  imports: [
    IonicModule,
  ],
  entryComponents: [
    Mine,
    Settings,
  ],
  exports: [
    Mine,
  ]
})
export class MineModule {}
