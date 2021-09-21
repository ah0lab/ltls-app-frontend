import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipsPageRoutingModule } from './tips-routing.module';

import { TipsPage } from './tips.page';
import { ViewTipsComponent } from 'src/app/components/view-tips/view-tips.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipsPageRoutingModule,
  ],
  declarations: [TipsPage, ViewTipsComponent]
})
export class TipsPageModule {}
