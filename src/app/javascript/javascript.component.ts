import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {


  today=new Date();
  salary:number=50000;
  marksPercentage:number=0.76;
  roi:number=0.12;


  n:number=25;

  empData=[];
  //inject DataService obj
  constructor(private ds:DataService) { }

  ngOnInit(): void {
   
  }

}
