import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialPageModule)
  },
  {
    path: '',
    redirectTo: 'tutorial',
    pathMatch: 'full'
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'modal-lsl',
    loadChildren: () => import('./pages/modal-lsl/modal-lsl.module').then( m => m.ModalLSLPageModule)
  },
  {
    path: 'modal-strat',
    loadChildren: () => import('./pages/modal-strat/modal-strat.module').then( m => m.ModalStratPageModule)
  },
  {
    path: 'ltls-interaction',
    loadChildren: () => import('./pages/ltls-interaction/ltls-interaction.module').then( m => m.LtlsInteractionPageModule)
  },
  {
    path: 'learn-sounds',
    loadChildren: () => import('./pages/learn-sounds/learn-sounds.module').then( m => m.LearnSoundsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
