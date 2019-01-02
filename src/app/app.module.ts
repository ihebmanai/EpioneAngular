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
import { ListDoctorsComponent } from './doctor/list-doctors/list-doctors.component';
import { CountdownModule } from 'ngx-countdown';
import { RegiserComponent } from './doctor/regiser/regiser.component';
import { ProfileComponent } from './doctor/profile/profile.component';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

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
    ListDoctorsComponent,
    RegiserComponent    ,
    ProfileComponent,
    

 
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
    CountdownModule,
    ReactiveFormsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1Ijoic2thbmRlcjE5OSIsImEiOiJjam95ZzZrdDgyaW5zM2tybnZ2dndtZnN4In0.KPPjDW0Q0esyQqxhUd2wyg', // Optionnal, can also be set per map (accessToken input of mgl-map)
      geocoderAccessToken: 'TOKEN' 
    })
 
  ],
  
  providers: [],
  entryComponents : [MyDialogComponent],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
