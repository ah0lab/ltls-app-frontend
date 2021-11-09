import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnSoundsPageRoutingModule } from './learn-sounds-routing.module';

import { LearnSoundsPage } from './learn-sounds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnSoundsPageRoutingModule
  ],
  declarations: [LearnSoundsPage]
})
export class LearnSoundsPageModule {}
