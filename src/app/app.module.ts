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
import { StarRatingModule } from 'angular-star-rating';

import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ListDoctorsComponent } from './patient/list-doctors/list-doctors.component';
import { CountdownModule } from 'ngx-countdown';




export class App {
 
}
@NgModule({
  declarations: [
    MyDialogComponent,
    AppComponent,
    ListAppointmentsComponent,
    AddAppointmentComponent,
    DetailsAppComponent,
    UpdateAppComponent,
    AuthentitcationComponent,
    ListDoctorsComponent
    
    

    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule,
    StarRatingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    CountdownModule
    
   
    

  ],
  
  providers: [],
  entryComponents : [MyDialogComponent],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
