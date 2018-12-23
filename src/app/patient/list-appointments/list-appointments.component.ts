import { Component, OnInit, Input } from '@angular/core';


import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Appointment } from 'src/app/models/Appointment';
import { SeviceRdvService } from 'src/app/service/sevice-rdv.service';
import { race } from 'rxjs';
import { IStarRatingOnClickEvent } from 'angular-star-rating/dist/src/star-rating-struct';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from 'src/app/my-dialog/my-dialog.component';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.css']
})
export class ListAppointmentsComponent implements OnInit {
  apps : Appointment[] = []
  dates : any [] = []
  today= new Date();
  num : number = 0
  days : number
  diff : number = 0
  autorisation : boolean = false
  @Input() app:Appointment= new Appointment("","","","","","","",0)

  

  
  onClickResult:IStarRatingOnClickEvent;
  link = 'Accepted Appointments'
  rate : number = 0 
  constructor(private service : SeviceRdvService,) { }

  ngOnInit() {
    
      this.service.getAcceptedObs().subscribe(
        data =>
        {this.apps=data,
          console.log(this.apps)
         
        }) }



    getDiffDays(date:string) : number {
      this.days=  new Date(date).getDay() - this.today.getDay()
      console.log('days'+this.days)
      return this.days
    }

 
      getDiferenceInDays(date : string) : number {

       this.diff= ((new Date(date).getTime() - new Date().getTime())/ (1000 * 60 * 60 * 24)) ;
       
       return this.diff
        
    }


    getAutorisationRating(date:string) : boolean {
      if(this.getDiferenceInDays(date)<0) return this.autorisation = false
         
      return true
    }
    

   getDiff(date : string) : number {
    this.num= Date.parse(date) - Date.parse(this.today.toString());
   
    // console.log("ssss"+this.num)
     return this.num
   }
   
  
  

    onClick = ($event:IStarRatingOnClickEvent,id:number) => {
      console.log('onClick $event: ', $event);
      console.log('id event:'+id)
      this.onClickResult = $event;
      this.rate=this.onClickResult.rating
      console.log(this.rate)

      this.service.getAppById(id.toString()).subscribe(
      
        res => {this.app = res,console.log(this.app)}
        
        );

       

      this.app.note = this.rate
      
        console.log('rendez vous'+this.app.note)

        this.service.edit(this.app)
          .subscribe()
        console.log('rate added succefuly')
        alert('Rating added succeffully .. Thnx')
  };

    getRate(idDoctor:number)  {
    var size = 0; 
    
      for(let app of this.apps)
      {
        size++
        if(app.id_doctor==1) {

          this.rate = this.rate+ app.note

        }
        
      }
      console.log('rate'+this.rate)
      return this.rate/size
     
    
    }

    

    getMyRequests()
    {
      console.log('requests')
      this.link = 'Requested Appointments'
      this.service.getRequestObs().subscribe(data => this.apps=data);
      
    }
    
    getMyRefused()
    {
      console.log('Refused')
      this.link = 'Refused Appointment'
      this.service.getRefusedObs().subscribe(data => this.apps=data);
    }

    getMyAccepted()
    {
      console.log('Accepted')
      this.link = ('Accepted Appointments')
      this.service.getAcceptedObs().subscribe(data => this.apps=data);
    }

    deleteAppointment(app)
    {
      console.log('supression'+app.id)
      this.apps.splice(this.apps.indexOf(app),1)

      
      this.service.deleteAppointment(app.id).subscribe();
    }

    getAppointment(app)
    {
      console.log('details'+this.apps.indexOf(app) + app)
      
      return this.apps[this.apps.indexOf(app)];
    }
    
    
  
  }


