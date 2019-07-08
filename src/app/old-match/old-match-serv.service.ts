import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlsService } from '../api-urls.service';

@Injectable({
  providedIn: 'root'
})
export class OldMatchServService {

  oldMatchUrl = this._apiUrl.cricUrls.oldMatch;

  constructor(
    private _httpClient : HttpClient,
    private _apiUrl : ApiUrlsService
  ) { }

  getOldMatchData(){
    return this._httpClient.get(this.oldMatchUrl);
  }
}
