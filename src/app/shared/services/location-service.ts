import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../core/api.service';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private readonly http: HttpClient,
              private readonly apiService : ApiService
  ) {
  }

  async createLocation(newLocation: { location: String }): Promise<string> {
    try {
      const data: string = await firstValueFrom(
        this.apiService.createLocation(newLocation)
      );
      return data;
    } catch (err) {
      console.error(err);
      throw err; // tu peux relancer si tu veux gérer ailleurs
    }
  }
}
