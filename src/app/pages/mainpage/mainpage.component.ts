import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  portfolio:any =[1,2,3,4,5,6];


  constructor() { }

  ngOnInit(): void {
  }

}
