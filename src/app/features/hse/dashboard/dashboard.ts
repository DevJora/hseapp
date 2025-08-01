import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    NgIf
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class HseDashboard {
  username = localStorage.getItem('username') || 'Utilisateur';
  pseudo = localStorage.getItem('pseudo') || 'Profil HSE';
  role = localStorage.getItem('role') || 'HSE';
  photoDataUrl: string | null = localStorage.getItem('photo');

  onPhotoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.photoDataUrl = reader.result as string;
        localStorage.setItem('photo', this.photoDataUrl);
      };
      reader.readAsDataURL(file);
    }
  }
}
