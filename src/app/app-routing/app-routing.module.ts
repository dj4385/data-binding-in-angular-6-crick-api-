import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { MatchComponent } from '../match/match.component';
import { PlayerDetailComponent } from '../player-detail/player-detail.component';
import { NotfoundComponent } from '../notfound/notfound.component';

const appRoute: Routes = [
  {
    path: 'matchdetail',
    component: MatchComponent
  },
  {
    path: 'playerInfo',
    component: PlayerDetailComponent
  },
  {
    path: '',
    redirectTo: 'matchdetail',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
