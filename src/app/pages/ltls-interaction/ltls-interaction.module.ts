import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LtlsInteractionPageRoutingModule } from './ltls-interaction-routing.module';

import { LtlsInteractionPage } from './ltls-interaction.page';
import {LtlsInteractionDirective} from '../../directives/ltls-interaction.directive';
import {LtlsSoundVisualComponent} from '../../components/ltls-sound-visual/ltls-sound-visual.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LtlsInteractionPageRoutingModule
  ],
    declarations: [LtlsInteractionPage, LtlsInteractionDirective, LtlsSoundVisualComponent]
})
export class LtlsInteractionPageModule { }
