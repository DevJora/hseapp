import {Component, OnInit} from '@angular/core';
import {HseService} from '../../../shared/services/hse-service';
import {LocationService} from '../../../shared/services/location-service';
import {FormsModule} from '@angular/forms';
import {LocationSite} from '../../../shared/models/Location';
import { NgForOf} from '@angular/common';

@Component({
  selector: 'app-location',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './location.html',
  styleUrl: './location.css'
})
export class Location implements  OnInit {
  newLocation!: String;
  location!: LocationSite[];
  constructor(private readonly locationService: LocationService) {
  }

  ngOnInit(): void {
    this.locationService.getAllLocation().then(results => {
      this.location = results;
    });
  }

  addNewLocation() {
    if (!this.newLocation) {
      return;
    }
    const loc = {location : this.newLocation}
    this.locationService.createLocation(loc).then(r => {
      console.log(r);
    })
  }

  deleteSite(location: string) {
    this.locationService.deleteLocation(location).then(r => {
      console.log(r);
    })
  }
}
