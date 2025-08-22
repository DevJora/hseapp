import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HseService {
  constructor(private http: HttpClient) {}

  createHse(){

  }
}
