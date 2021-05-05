import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  users=[];

  editUserIndex;
  editUserObj;

  userEditStatus:boolean=false;

  addUser(userObj){
    this.users.push(userObj)
  }

  deleteUser(ind){
    this.users.splice(ind,1)
  }

  editUser(userObj,ind){
    this.userEditStatus=true;
    this.editUserIndex=ind;
    this.editUserObj=userObj;
    console.log(this.editUserObj)
  }

  saveUser(newUserObj){

  
      this.users.splice(this.editUserIndex,1,newUserObj)
      this.userEditStatus=false;
  }
}
