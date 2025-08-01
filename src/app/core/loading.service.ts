import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubjectHse = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubjectHse.asObservable();

  showHse() {
    this.loadingSubjectHse.next(true);
  }

  hideHse() {
    this.loadingSubjectHse.next(false);
  }
}
