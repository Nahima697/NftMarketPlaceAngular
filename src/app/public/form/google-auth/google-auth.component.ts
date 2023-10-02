import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.sass']
})
export class GoogleAuthComponent {
  constructor(private router: Router, authService:AuthService) {}

  loginWithGoogle() {
    window.location.href = 'https://127.0.0.1:8000/connect/google';
      }

  }




