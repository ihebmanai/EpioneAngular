import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';
import { extract } from 'src/app/models/extract';

import {
  MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef, DocumentRef, MapServiceFactory,
  BingMapAPILoaderConfig, BingMapAPILoader,
  GoogleMapAPILoader, GoogleMapAPILoaderConfig
} from 'angular-maps';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  
})
export class ProfileComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: DoctorServiceService) { }
  user: extract;
  profile: string;
  title = 'rj';
  lat: string;
  long: string;
  ngOnInit() {
    let params: string = this.activatedRoute.snapshot.params.profile;
    this.profile = params;
    console.log(params);

    this.service.getprofile(params).subscribe(data => this.user = data)



  }

}
