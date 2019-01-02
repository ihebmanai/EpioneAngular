import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { extract } from '../models/extract';


@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor(private http : HttpClient) { }

  
  getdoctors(speciality :string,place:string,pagenumber:number):Observable<extract[]>{
    var url="http://localhost:8089/Epione-web/exe/SpecialityAndPlace?specialite=" + speciality+ "&place=" +place+ "&pagenumber=" +pagenumber;
    console.log(url)
    return this.http.get<extract[]>(url);
  }
  register(firstname:string,lastname:string,speciality :string,email:string,password:string):Observable<extract[]>{
    var url="http://localhost:8089/Epione-web/exe/AddFromDoctolib" ;
    console.log(url)
    return this.http.post<extract[]>(url,{"lastname": lastname,"firstname":firstname,
                                          "speciality_s":speciality,
                                          "password":password,
                                          "email":email});
  }

  getprofile(profile:string):Observable<extract>{
    var url="http://localhost:8089/Epione-web/exe/profile/?profile=https://" +profile ;
    console.log(url)
    return this.http.get<extract[]>(url);
  }
}
