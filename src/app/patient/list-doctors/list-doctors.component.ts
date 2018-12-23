import { Component, OnInit } from '@angular/core';
import { SeviceRdvService } from 'src/app/service/sevice-rdv.service';
import { User } from 'src/app/models/User';
import { map } from "rxjs/operators";



@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit {
 doctors : User[] = []
 rateMoy : number = 0
  constructor(private service : SeviceRdvService) { }

  ngOnInit() {

    this.service.getDoctors().subscribe(data =>{
      this.doctors=data,console.log(this.doctors),this.doctors.forEach(element => {
        this.getRate(element.id)
      });}
      )
    
  }


  getRate(id:number) :number {
    this.service.getRateObs(id).pipe(map(res=>res)).
    subscribe(data=>{this.rateMoy=data,console.log("rate ++"+this.rateMoy)})
    return this.rateMoy
  }

}
