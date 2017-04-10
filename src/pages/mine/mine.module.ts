import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Mine } from './mine';

@NgModule({
  declarations: [
    Mine,
  ],
  imports: [
    IonicModule,
  ],
  entryComponents: [
    Mine
  ],
  exports: [
    Mine
  ]
})
export class MineModule {}
