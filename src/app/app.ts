import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoadingComponent} from './shared/loading/loading.component';
import {NavBarComponent} from './core/nav-bar/nav-bar.component';
import {FooterComponent} from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingComponent, NavBarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hseapp');
}
