import { Injectable } from '@angular/core';
import { ApiUrlsService } from '../api-urls.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalSerService {

  calendarMatchURL = this._apiURl.cricUrls.matchCalenderUrl;

  constructor(
    private _apiURl : ApiUrlsService,
    private _httpClient : HttpClient
  ) { }

  getMatchDates(){
    return this._httpClient.get(this.calendarMatchURL);
  }
}
