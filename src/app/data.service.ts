import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class DataService {

 
//inject HttpClient obj
  constructor(private hc:HttpClient) { }

   getData():Observable<[]>{
    return this.hc.get<[]>('https://jsonplaceholder.typicode.com/comments')
   }


  getUsers():Observable<[]>{
   return this.hc.get<[]>("https://jsonplaceholder.typicode.com/users")
  }

  getUser(id):Observable<{}>{
    return this.hc.get("https://jsonplaceholder.typicode.com/users/"+id)
  }
}
