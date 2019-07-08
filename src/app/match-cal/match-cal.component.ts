import { Component, OnInit } from '@angular/core';
import { CalSerService } from './cal-ser.service';


@Component({
  selector: 'app-match-cal',
  templateUrl: './match-cal.component.html',
  styleUrls: ['./match-cal.component.css']
})
export class MatchCalComponent implements OnInit {

  matchDatesAPIData :any = {}
  matchDates : any = []
  dates: any = []
  team :any = []
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
          
          if(this.matchDates){
            this.matchDates.forEach(element => {
              this.dates.push(element.date);
              this.team.push(element.name);
            });
          }
        }
      )
  }
}
