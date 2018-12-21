import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-authentitcation',
  templateUrl: './authentitcation.component.html',
  styleUrls: ['./authentitcation.component.css']
})
export class AuthentitcationComponent implements OnInit {

  emailText : string 
  passwordText : string
  constructor(private service : UserService,private http:HttpClient) { }

  ngOnInit() {
  }

  login() {
    this.service.AutheticateMe(this.emailText,this.passwordText).subscribe()


  }



}
