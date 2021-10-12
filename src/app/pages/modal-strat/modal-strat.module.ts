import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalStratPageRoutingModule } from './modal-strat-routing.module';

import { ModalStratPage } from './modal-strat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalStratPageRoutingModule
  ],
  declarations: [ModalStratPage]
})
export class ModalStratPageModule {}
