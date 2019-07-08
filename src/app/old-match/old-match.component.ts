import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OldMatchServService } from './old-match-serv.service';

@Component({
  selector: 'app-old-match',
  templateUrl: './old-match.component.html',
  styleUrls: ['./old-match.component.css']
})
export class OldMatchComponent implements OnInit {

  oldMatch :any = {}
  oldMatchData :any = []

  constructor(
    private _httpClient : HttpClient,
    private _oldMatchSer : OldMatchServService
  ) { }

  ngOnInit() {
    this.getOldMatchDetail();
  }

  getOldMatchDetail(){
    this._oldMatchSer.getOldMatchData()
      .subscribe(
        res =>{
          this.oldMatch = res;
          this.oldMatchData = this.oldMatch.data
          console.log(this.oldMatch.data)
        },
        err=>{
          console.log(err)
        }
      )
  }
}
