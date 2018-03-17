import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-name',
  templateUrl: './child-name.component.html',
  styleUrls: ['./child-name.component.css']
})
export class ChildNameComponent implements OnInit {
  @Output()
  onChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  
changeNumber(increased: boolean) {
  this.onChange.emit(increased);
}
}
