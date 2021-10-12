import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalLSLPageRoutingModule } from './modal-lsl-routing.module';

import { ModalLSLPage } from './modal-lsl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalLSLPageRoutingModule
  ],
  declarations: [ModalLSLPage]
})
export class ModalLSLPageModule {}
