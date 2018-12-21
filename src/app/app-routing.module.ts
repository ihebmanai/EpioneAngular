import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { AuthentitcationComponent } from './User/authentitcation/authentitcation.component';
import { DetailsAppComponent } from './patient/details-app/details-app.component';
import { UpdateAppComponent } from './patient/update-app/update-app.component';
import { ListAppointmentsComponent } from './patient/list-appointments/list-appointments.component';
import { AddAppointmentComponent } from './patient/add-appointment/add-appointment.component';

const routes: Routes = [
  {path:"detail/:id",component:DetailsAppComponent},
  {path:"edit/:id",component:UpdateAppComponent},
  {path:'listAppointments',component:ListAppointmentsComponent},
  {path:'addAppointment',component:AddAppointmentComponent},
  {path:"login",component:AuthentitcationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  

  exports: [RouterModule]
})
export class AppRoutingModule { }
