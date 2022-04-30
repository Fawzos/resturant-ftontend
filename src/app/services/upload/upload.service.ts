import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http: HttpClient) { }

  uploadImage(obj:any):Observable<any> {
    return this.http.post("http://localhost:3000/api/categories/catImg", obj)
  }
}
