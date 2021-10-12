import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalStratPage } from './modal-strat.page';

const routes: Routes = [
  {
    path: '',
    component: ModalStratPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalStratPageRoutingModule {}
