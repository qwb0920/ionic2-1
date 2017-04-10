import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Query } from './query';

@NgModule({
  declarations: [
    Query,
  ],
  imports: [
    IonicModule,
  ],
  entryComponents: [
    Query
  ],
  exports: [
    Query
  ]
})
export class QueryModule {}
