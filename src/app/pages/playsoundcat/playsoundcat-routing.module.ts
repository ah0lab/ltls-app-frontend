import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaysoundcatPage } from './playsoundcat.page';

const routes: Routes = [
  {
    path: '',
    component: PlaysoundcatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaysoundcatPageRoutingModule {}
