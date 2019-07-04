import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { CricService } from './cric.service';
import { HttpClientModule } from '@angular/common/http';
import { MatchComponent } from './match/match.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { ApiUrlsService } from './api-urls.service';

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    PlayerDetailComponent,
    NavbarComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [
    CricService,
    ApiUrlsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
