import { Component, OnInit } from '@angular/core';

import { DoctorServiceService } from 'src/app/service/doctor-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-regiser',
  templateUrl: './regiser.component.html',
  styleUrls: ['./regiser.component.css']
})
export class RegiserComponent implements OnInit {
  RegisterForm: FormGroup;
  erreur : string ="";
  
  constructor(private service: DoctorServiceService, private fb: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.RegisterForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      speciality: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  register() {
    var firstname = this.RegisterForm.controls.firstname.value;
    var lastname = this.RegisterForm.controls.lastname.value;
    var email = this.RegisterForm.controls.email.value;
    var speciality = this.RegisterForm.controls.speciality.value;
    var password = this.RegisterForm.controls.password.value;
    console.log(firstname);
    console.log(lastname);
    console.log(speciality);
    console.log(email);
    console.log(password);
    this.service.register(firstname, lastname, speciality, email, password).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.router.navigate(['docteurs']);
      },
      error => {
        this.erreur=error.error;
        console.log("Error", error);
      }
    );
    
  }
}
