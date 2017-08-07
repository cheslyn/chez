import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccPage } from './socc';

@NgModule({
  declarations: [
    SoccPage,
  ],
  imports: [
    IonicPageModule.forChild(SoccPage),
  ],
})
export class SoccPageModule {}
