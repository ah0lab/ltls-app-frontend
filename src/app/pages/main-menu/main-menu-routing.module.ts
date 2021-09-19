import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuPage } from './main-menu.page';

const routes: Routes = [
  {
    path: '',
    component: MainMenuPage
  },
  {
    path: 'learn-sound',
    loadChildren: () => import('./learn-sound/learn-sound.module').then( m => m.LearnSoundPageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./tips/tips.module').then( m => m.TipsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMenuPageRoutingModule {}
