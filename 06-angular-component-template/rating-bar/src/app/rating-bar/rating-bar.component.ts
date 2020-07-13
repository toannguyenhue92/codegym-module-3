import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface IRatingUnit {
  value: number;
  active: boolean;
}

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  @Input()
  max = 10;

  @Output()
  ratingChange = new EventEmitter();

  ratingUnits: Array<IRatingUnit> = [];

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.max; index++) {
      this.ratingUnits.push({ value: index + 1, active: false });
    }
  }

  enter(index: number) {
    this.ratingUnits.forEach((ratingUnit, i) => {
      ratingUnit.active = i <= index;
    });
  }

  select(index: number) {
    this.ratingChange.emit(index + 1);
  }

  reset() {
    this.ratingUnits.forEach(element => {
      element.active = false;
    });
  }
}
