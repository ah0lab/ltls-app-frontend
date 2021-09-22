import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaysoundPage } from './playsound.page';

const routes: Routes = [
  {
    path: '',
    component: PlaysoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaysoundPageRoutingModule {}
