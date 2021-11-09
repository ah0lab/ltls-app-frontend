import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnSoundsPage } from './learn-sounds.page';

const routes: Routes = [
  {
    path: '',
    component: LearnSoundsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnSoundsPageRoutingModule {}
