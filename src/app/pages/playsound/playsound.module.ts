import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaysoundPageRoutingModule } from './playsound-routing.module';

import { PlaysoundPage } from './playsound.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaysoundPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PlaysoundPage]
})
export class PlaysoundPageModule {}
