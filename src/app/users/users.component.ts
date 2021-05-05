import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users=[];
  //inject data service obj
  constructor(private ds:DataService,private rt:Router) { }

  ngOnInit(): void {
    this.ds.getUsers().subscribe(
      res=>{
        this.users=res;
      }
    )
  }

  getUsersData(id){
    //navigate to userdetails component
  
    this.rt.navigateByUrl('userdetails/'+id)
  }
}
