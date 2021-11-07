import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LtlsInteractionPage } from './ltls-interaction.page';

const routes: Routes = [
  {
    path: '',
    component: LtlsInteractionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LtlsInteractionPageRoutingModule {}
