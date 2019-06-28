import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CricService } from './cric.service';
import { HttpClientModule } from '@angular/common/http';
import { MatchComponent } from './match/match.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CricService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
