import { Component, OnInit } from '@angular/core';
import { SeviceRdvService } from 'src/app/service/sevice-rdv.service';
import { User } from 'src/app/models/User';
import { extract } from 'src/app/models/extract';
import { map } from "rxjs/operators";
import { DoctorServiceService } from 'src/app/service/doctor-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit {


  constructor(private doc: DoctorServiceService, private fb: FormBuilder) { }
  listdoctors: extract;
  docform: FormGroup;
  pagenumber: number = 1;
  speciality: string = "medecin-generaliste";
  place: string = "france";
  ngOnInit() {
    this.docform = this.fb.group({
      speciality: ['', Validators.required],
      place: ['', Validators.required]
    })
  if (this.doc.getdoctors("pediatre", "france", this.pagenumber).subscribe(data => this.listdoctors = data)
  ){
    console.log(this.listdoctors);
  }  
  }

  getlist() {
    if(this.docform.valid)
    {
    this.speciality = this.docform.controls.speciality.value;
    this.place = this.docform.controls.place.value;
    } 

    console.log(this.speciality);
    console.log(this.place);
    console.log(this.pagenumber);
    this.doc.getdoctors(this.speciality, this.place, this.pagenumber)
      .subscribe(data => this.listdoctors = data)

  }

  next() {
    this.pagenumber += 1;
    this.getlist();
  }

  previous() {

    if (this.pagenumber > 1)
      this.pagenumber -= 1;
    else
      this.pagenumber = 1;
    this.getlist();
  }
}
