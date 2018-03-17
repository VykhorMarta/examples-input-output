import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  array: number[] = [1,2,3,4,5,6,7,8]
  name: string = "Marta";
  surname: string = "Vykhor";
  skills: string[] = [ "JavaScript", "HTML5", "CSS3", "Socket.io"];
  images: any = ["http://i.dailymail.co.uk/i/pix/2016/09/06/11/37F60FD200000578-0-image-a-5_1473156426673.jpg"]
}
