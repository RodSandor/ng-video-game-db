import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { GameDetailsComponent } from './shared/components/game-details/game-details.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search/:game-search',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: GameDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
