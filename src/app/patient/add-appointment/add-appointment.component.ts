import { Component, OnInit, Input } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';


import { Title } from '@angular/platform-browser';
import { SeviceRdvService } from 'src/app/service/sevice-rdv.service';
import { Appointment } from 'src/app/models/Appointment';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  titleText : string
  dateText : any 
  objectText : string
  messageText : string 
  endText : string 
  startText : string
  stateText ='running' 
  noteText : number
  dif:boolean =false

  app :Appointment
  constructor( private service : SeviceRdvService) { }

  ngOnInit() {
  }
  getDiferenceInDays(date : Date) : boolean  {
    var diff
    diff= ((new Date(date).getTime() - new Date().getTime())/ (1000 * 60 * 60 * 24)) ;
    console.log('diff'+diff)
    if(diff>0) return true
    else return false
    
     
 }

 logDate(date){
   console.log(date)
 this.getDiferenceInDays(date)
 }

  log(x) {
    
    console.log(x)
  }
  log1(x){
    console.log(x)
    this.endText="xxxxxxxxxxxxxxxx"

  }

  addAppointment(edv : object) {
    
    const rdv: object = {
      title: this.titleText,
      object : this.objectText, 
      message : this.objectText, 
      date_appointment : this.dateText , 
      endHour : this.endText, 
      start_hour : this.startText,
      state : this.stateText,
      note : this.noteText,
      patient: {id:7}, 
      doctor : {id:1}
      

    };

   this.app = new Appointment(this.titleText,this.dateText,this.endText,this.stateText,this.startText,this.messageText,this.objectText,5)
    console.log(rdv)

    this.service.create(rdv)
      .subscribe()




  }
}
