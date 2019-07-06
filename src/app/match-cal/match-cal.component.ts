import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalSerService } from './cal-ser.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-match-cal',
  templateUrl: './match-cal.component.html',
  styleUrls: ['./match-cal.component.css']
})
export class MatchCalComponent implements OnInit {

  matchDatesAPIData :any = {}
  matchDates : any = []

  constructor(
    private _matchSer: CalSerService
  ) { }

  ngOnInit() {
    this.getMatchDates();
  }

  getMatchDates(){
    this._matchSer.getMatchDates()
      .subscribe(
        res => {
          this.matchDatesAPIData = res;
          this.matchDates = this.matchDatesAPIData.data;
        }
      )
  }

}
