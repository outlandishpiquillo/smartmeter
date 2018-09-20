import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildinginfoPage } from './buildinginfo';

@NgModule({
  declarations: [
    BuildinginfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildinginfoPage),
  ],
})
export class BuildinginfoPageModule {}
