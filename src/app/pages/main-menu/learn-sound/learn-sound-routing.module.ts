import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnSoundPage } from './learn-sound.page';

const routes: Routes = [
  {
    path: '',
    component: LearnSoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnSoundPageRoutingModule {}
