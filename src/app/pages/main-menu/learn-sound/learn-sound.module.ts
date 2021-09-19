import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnSoundPageRoutingModule } from './learn-sound-routing.module';

import { LearnSoundPage } from './learn-sound.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnSoundPageRoutingModule
  ],
  declarations: [LearnSoundPage]
})
export class LearnSoundPageModule {}
