import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { Title } from '@angular/platform-browser';
import { User } from 'src/app/models/User';
import { Appointment } from 'src/app/models/Appointment';
import { SeviceRdvService } from 'src/app/service/sevice-rdv.service';

@Component({
  selector: 'app-update-app',
  templateUrl: './update-app.component.html',
  styleUrls: ['./update-app.component.css']
})
export class UpdateAppComponent implements OnInit {
  titleText : string 
  dateText : any 
  objectText : string
  messageText : string 
  endText : string 
  startText : string
  stateText ='running' 
  noteText : number
  today : Date
  user : User = new User()
  
  @Input() app:Appointment= new Appointment("","","","","","","",5)
  constructor(private service : SeviceRdvService,private router:Router,private activatedRoute: ActivatedRoute) {
    
   }

  ngOnInit() {
    let params :any = this.activatedRoute.snapshot.params;
    let id:number = params.id;
    console.log(id)
    this.service.getAppById(id.toString()).subscribe(
      
      res => this.app = res
      
      );
      this.today = new Date(this.app.date_appointment)
     this.titleText = this.app.title
     this.objectText=this.app.object
     this.messageText=this.app.message
     this.endText=this.app.endHour
     
     
     

     console.log("value"+this.titleText)
  }
  
  log(x) {
    console.log(x)
  }

  updateAppointment(edv:object) {
    let params :any = this.activatedRoute.snapshot.params;
    let id:number = params.id;
    const rdv: object = {
      id: id,
      title: this.app.title,
      object : this.app.object, 
      message : this.app.message, 
      date_appointment : this.app.date_appointment , 
      endHour : this.app.endHour, 
      start_hour : this.app.start_hour,
      state : this.app.state,
      note : this.app.note,
      patient: {id:7}, 
      doctor : {id:1}
      

    };

   this.user.id=1
   //this.app = new Appointment(this.titleText,this.dateText,this.endText,this.stateText,this.startText,this.messageText,this.objectText,1,1,5)
   this.app = new Appointment(this.app.title,this.app.date_appointment,this.app.endHour,'running',this.app.start_hour,this.app.message,this.app.object,5)
   this.app.id = id
   
  
    console.log('rendez vous'+rdv)

    this.service.edit(rdv)
      .subscribe()
  }

}
