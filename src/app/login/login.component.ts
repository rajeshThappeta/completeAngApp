import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription, timer} from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor() {
   
   }

  ngOnInit(): void {
 
  }
 
  logInUser(userObj){
    console.log(userObj)
  }
 
 
}
