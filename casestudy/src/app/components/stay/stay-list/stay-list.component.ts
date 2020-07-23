import { Component, OnInit } from '@angular/core';
import { IStay } from 'src/app/models/IStay';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'app-stay-list',
  templateUrl: './stay-list.component.html',
  styleUrls: ['./stay-list.component.css']
})
export class StayListComponent implements OnInit {

  stays = new Array<IStay>();

  constructor(private stayService: StayService) { }

  ngOnInit() {
    this.stayService.getAllStayService()
      .subscribe(
        value => (this.stays = value),
        error => console.log(error));
  }

}
