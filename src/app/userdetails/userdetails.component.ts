import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  userObj;
  constructor(private ar:ActivatedRoute,private ds:DataService) { }

  ngOnInit(): void {

    //read data from URL
    this.ar.paramMap.subscribe(data=>{
    

        this.ds.getUser(data["params"].id).subscribe(
          res=>{
            this.userObj=res;
          }
        )
    })
  }

}
