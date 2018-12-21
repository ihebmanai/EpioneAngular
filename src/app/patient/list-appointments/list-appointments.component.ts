import { Component, OnInit } from '@angular/core';


import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Appointment } from 'src/app/models/Appointment';
import { SeviceRdvService } from 'src/app/service/sevice-rdv.service';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.css']
})
export class ListAppointmentsComponent implements OnInit {
  apps : Appointment[] = []

  

  link = 'Accepted Appointments'
  
  constructor(private service : SeviceRdvService) { }

  ngOnInit() {
      this.service.getAcceptedObs().subscribe(data =>this.apps=data)
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


