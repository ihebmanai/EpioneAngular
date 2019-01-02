import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { AuthentitcationComponent } from './User/authentitcation/authentitcation.component';
import { DetailsAppComponent } from './patient/details-app/details-app.component';
import { UpdateAppComponent } from './patient/update-app/update-app.component';
import { ListAppointmentsComponent } from './patient/list-appointments/list-appointments.component';
import { AddAppointmentComponent } from './patient/add-appointment/add-appointment.component';
import { ListDoctorsComponent } from './doctor/list-doctors/list-doctors.component';
import {RegiserComponent} from './doctor/regiser/regiser.component'
import {ProfileComponent} from './doctor/profile/profile.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path:"detail/:id",component:DetailsAppComponent},
  {path:"edit/:id",component:UpdateAppComponent},
  {path:'listAppointments',component:ListAppointmentsComponent},
  {path:'addAppointment/:id',component:AddAppointmentComponent},
  {path:"login",component:AuthentitcationComponent},
  {path:"docteurs",component:ListDoctorsComponent},
  { path: 'register', component: RegiserComponent },
  { path: 'profile/:profile', component: ProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  

  exports: [RouterModule]
})
export class AppRoutingModule { }
