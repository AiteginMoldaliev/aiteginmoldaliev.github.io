import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  pullOn:any = '';
  exit:any = 'fa-solid fa-bars';
  experinces:any = [
    {name: 'HTML&CSS', style:['background-color:white', 'width:70%']},
    {name: 'Bootstrap', style:['background-color:white','width:70%']},
    {name: 'SCSS', style:['background-color:white','width:70%']},
    {name: 'JS', style:['background-color:white','width:70%']},
    {name: 'Git', style:['background-color:white','width:70%']},
    {name: 'JQuery', style:['background-color:white','width:70%']},
    {name: 'Phython', style:['background-color:white','width:70%']},
    {name: 'TypeScript', style:['background-color:white','width:70%']},
    {name: 'WordPress', style:['background-color:white','width:70%']},
    {name: 'PHP', style:['background-color:white','width:70%']},
    {name: 'SQL', style:['background-color:white','width:70%']},
    {name: 'ReactJS', style:['background-color:white','width:70%']}
  ]
  constructor() { 
  }

  ngOnInit(): void {
    
  }
  pullR(){
    if(this.pullOn === ''){
    this.pullOn='pullOn';
    }else{
    this.pullOn='';
    }
    if(this.exit === 'fa-solid fa-bars'){
    this.exit='fa-solid fa-xmark';
    }else{ 
    this.exit='fa-solid fa-bars';
    }
  }
}
