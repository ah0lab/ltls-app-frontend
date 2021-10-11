import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialPageRoutingModule } from './tutorial-routing.module';

import { TutorialPage } from './tutorial.page';
import {TutorialSlideContentComponent} from '../../components/tutorial-slide-content/tutorial-slide-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialPageRoutingModule
  ],
  declarations: [TutorialPage, TutorialSlideContentComponent, TutorialSlideContentComponent]
})
export class TutorialPageModule {}
