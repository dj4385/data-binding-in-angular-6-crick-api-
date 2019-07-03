import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlsService } from './api-urls.service';

@Injectable({
  providedIn: 'root'
})
export class CricService {

  private url = this._apiUrl.cricUrls.matchUrl;
  constructor(
    private _httpClient : HttpClient,
    private _apiUrl: ApiUrlsService
  ) { }

  getMatchDetails(){
    return this._httpClient.get(this.url);
  }
}
