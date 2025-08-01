import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgIf} from '@angular/common';
import {LoadingService} from '../../core/loading.service';

@Component({
  selector: 'app-loading',
  imports: [
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements  OnInit {
  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {
    }
}
