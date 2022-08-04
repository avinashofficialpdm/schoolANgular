import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 
  constructor(private _http: HttpClient, private rout: Router) { }

  getDetailsOnTable(): Observable<any> {
    return this._http.get("http://localhost:3000/posts")
  }



  addUser(user: any) {
    this._http.post("http://localhost:3000/posts", user).subscribe((res) => { console.log(res) })
  }



  getOneUser(id: number) {
    let baseUrl = "http://localhost:3000/posts/"
    return this._http.get(baseUrl + id)
  }

  editUser(id: number, body: object) {
    let baseUrl = "http://localhost:3000/posts/"
    this._http.put(baseUrl + id, body).subscribe(res => { console.log(res); })
    // window.location.reload()
  }


  deleteUser(id: number) {
    let baseUrl = "http://localhost:3000/posts/"
    this._http.delete(baseUrl + id).subscribe(res => { console.log(res) })
    window.location.reload()
  }



}
