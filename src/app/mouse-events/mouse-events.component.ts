import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-mouse-events',
  templateUrl: './mouse-events.component.html',
  styleUrls: ['./mouse-events.component.css']
})
export class MouseEventsComponent implements OnInit {

  appOrangeColor: any;
  constructor() { }

  ngOnInit() {
  }

  over(){
    // console.log("Mouseover called");
    this.appOrangeColor = "red";
  }
}
