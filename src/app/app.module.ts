import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule,Routes  } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModuleWithProviders } from "@angular/core";


import {ModalModule} from "ng2-modal";
import { AuthentitcationComponent } from './User/authentitcation/authentitcation.component';
import { ListAppointmentsComponent } from './patient/list-appointments/list-appointments.component';
import { AddAppointmentComponent } from './patient/add-appointment/add-appointment.component';
import { DetailsAppComponent } from './patient/details-app/details-app.component';
import { UpdateAppComponent } from './patient/update-app/update-app.component';


export class App {
 
}
@NgModule({
  declarations: [
    AppComponent,
    ListAppointmentsComponent,
    AddAppointmentComponent,
    DetailsAppComponent,
    UpdateAppComponent,
    AuthentitcationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
