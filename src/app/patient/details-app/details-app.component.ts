import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { SeviceRdvService } from 'src/app/service/sevice-rdv.service';
import { Appointment } from 'src/app/models/Appointment';


@Component({
  selector: 'app-details-app',
  templateUrl: './details-app.component.html',
  styleUrls: ['./details-app.component.css']
})
export class DetailsAppComponent implements OnInit {
  
  constructor(private service : SeviceRdvService,private router:Router,private activatedRoute: ActivatedRoute) { }
 
  @Input() app:Appointment = new Appointment("","","","","","","",5,)
  
  ngOnInit() {
    let params :any = this.activatedRoute.snapshot.params;
    let id:number = params.id;
    console.log(id)
    this.service.getAppById(id.toString()).subscribe(
      
      res => this.app = res
      
      );
      console.log("activated route:"+this.app)
      
     }

     sendMail(){
      let params :any = this.activatedRoute.snapshot.params;
      let id:number = params.id;
       console.log('sending ...')
       this.service.RememberDoctor(id.toString()).subscribe(
         res=>console.log(res)
       )
     }
 

  }


