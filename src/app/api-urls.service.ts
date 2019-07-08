import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlsService {

  cricUrls = {
    matchUrl: "https://cricapi.com/api/matches?apikey=w1jTrBs32FM0LbnA79xSBr9QJkP2",
    matchCalenderUrl:"https://cricapi.com/api/matchCalendar?apikey=w1jTrBs32FM0LbnA79xSBr9QJkP2",
    oldMatch: "https://cricapi.com/api/cricket?apikey=w1jTrBs32FM0LbnA79xSBr9QJkP2"
  }
  constructor() { }
}
