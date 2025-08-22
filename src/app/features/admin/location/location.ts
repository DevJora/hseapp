import { Component } from '@angular/core';
import {HseService} from '../../../shared/services/hse-service';
import {LocationService} from '../../../shared/services/location-service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-location',
  imports: [
    FormsModule
  ],
  templateUrl: './location.html',
  styleUrl: './location.css'
})
export class Location {
  newLocation!: String;
  constructor(private readonly locationService: LocationService) {

  }

  addNewLocation() {
    if (!this.newLocation) {
      return;
    }
    const loc = {location : this.newLocation}
    console.log(this.newLocation);
    this.locationService.createLocation(loc)
  }
}
