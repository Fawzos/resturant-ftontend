import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  loggedin=false
  public user:any={}
  public user1:any={}

  constructor(private http: HttpClient) { }

  register(obj:any):Observable<any>{
    return this.http.post("http://localhost:3000/api/users/user/register",obj)
  }
  login(obj :any):Observable<any>{
    return this.http.post("http://localhost:3000/api/users/user/login",obj)
  }
  myProfile():Observable<any>{
    return this.http.get("http://localhost:3000/user/api/users/findUser")
  }
  logOut():Observable<any>{
    return this.http.get("http://localhost:3000/user/api/users/logout")
  }
  updateUser(obj:any):Observable<any>{
    return this.http.put("http://localhost:3000/user/api/users/editUser",obj)
  }

  getAllCategories():Observable<any>{
    return this.http.get("http://localhost:3000/api/categories")
  }

  getSingleCategory(id:any):Observable<any>{
    return this.http.get(`http://localhost:3000/api/categories/${id}`)
  }

  addCategory(obj:any):Observable<any>{
    return this.http.post("http://localhost:3000/api/categories", obj)
  }
}
