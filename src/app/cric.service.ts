import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CricService {

  private url = "https://cricapi.com/api/matches?apikey=w1jTrBs32FM0LbnA79xSBr9QJkP2";
  constructor(
    private _httpClient : HttpClient
  ) { }

  getMatchDetails(){
    return this._httpClient.get(this.url);
  }
}
