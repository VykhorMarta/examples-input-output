import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-name',
  templateUrl: './parent-name.component.html',
  styleUrls: ['./parent-name.component.css']
})
export class ParentNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  click: number = 0;
  changeNumber(increased: boolean) {
    if(increased === false){
      this.click --;
    }else {
      this.click++;
    }
  }
}
