import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  UrlAPI = "http://localhost:8089/Epione-web/authentication"
  constructor(private http : HttpClient) { }

   AutheticateMe(email : string , password:string) : Observable<boolean> {
    console.log('sending create request .. ');
    console.log(this.UrlAPI);
    return this.http.post<boolean>(this.UrlAPI, {"email":email,"password":password})
  }
}
