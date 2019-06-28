import { Component, OnInit } from '@angular/core';
import { CricService } from '../cric.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  matchDetail:any = {}
  _match: any = []

  constructor(
    private cricSer : CricService
  ) { }

  ngOnInit() {
    this.getMatchDetail();
  }
  
  getMatchDetail(){
    this.cricSer.getMatchDetails()
      .subscribe(
        res => {
          this.matchDetail = res
          this._match = this.matchDetail.matches
          //console.log("MatchDetail",this.matchDetail)
          console.log("MatchDetail innerdata",this.matchDetail.matches[0]["team-1"])

          alert(this.matchDetail.matches.date);
        },
        err => {
          alert(err)
        }
      )
  }

}
