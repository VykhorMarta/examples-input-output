import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hometask',
  templateUrl: './hometask.component.html',
  styleUrls: ['./hometask.component.css']
})
export class HometaskComponent implements OnInit {
oddNumbers: number[] = [];
evenNumbers: number[] = [];

onIntervalFired(firedNumber: number) {
  if (firedNumber % 2 === 0) {
    this.evenNumbers.push(firedNumber);
  }else {
    this.oddNumbers.push(firedNumber);
  }
}
  constructor() { }

  ngOnInit() {
  }

}
