import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/Appointment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeviceRdvService {
  AppointmentUrlAPI = "http://localhost:8089/Epione-web/appointments"
  idUser : number = 7

  constructor(private http : HttpClient) { }
  getAcceptedObs(): Observable <Appointment[]> {
  //  this.list = this.http.get<Appointment[]>(this.AppointmentUrlAPI,{ headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')});
  
  return this.http.get<Appointment[]>(this.AppointmentUrlAPI+"/myApp/"+this.idUser.toString(),{ headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')});
  }

  getRequestObs(): Observable <Appointment[]> {
    
    return this.http.get<Appointment[]>(this.AppointmentUrlAPI+"/req/"+this.idUser.toString(),{ headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')});
  }

  getRefusedObs(): Observable <Appointment[]> {

      return this.http.get<Appointment[]>(this.AppointmentUrlAPI+"/refusedApp/"+this.idUser.toString(),{ headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')});
   }

   create(rdv: object): Observable<boolean> {
    console.log('sending create request .. ');
    console.log(this.AppointmentUrlAPI);
    return this.http.post<boolean>(this.AppointmentUrlAPI, rdv)
    
  }

  deleteAppointment(id:string)
  {
    
    return this.http.delete(this.AppointmentUrlAPI+'/'+id);
  }

  getAppById(id:string): Observable <Appointment> {
    //console.log('id='+id)
    //  this.list = this.http.get<Appointment[]>(this.AppointmentUrlAPI,{ headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')});
    
    return this.http.get<Appointment>(this.AppointmentUrlAPI+'/'+id,{ headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')});
    }

    RememberDoctor(idAppointment:string): Observable <boolean> {
      //console.log('id='+id)
      //  this.list = this.http.get<Appointment[]>(this.AppointmentUrlAPI,{ headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')});
      
      return this.http.get<boolean>(this.AppointmentUrlAPI+'/mail/'+idAppointment,{ headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')});
      }

      edit(rdv: object): Observable<string> {
        return this.http.put<string>(this.AppointmentUrlAPI+'/update', rdv);
      }


      getRateObs(): Observable <number> {

        return this.http.get<number>(this.AppointmentUrlAPI+"/rate/"+1,{ headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')});
     }
    




}
