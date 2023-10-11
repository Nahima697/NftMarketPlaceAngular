import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.sass'],

})
export class GoogleAuthComponent {
  constructor(private router: Router,  private socialAuthService: SocialAuthService, private authService: AuthService) {}
  loggedIn?: boolean;
  user!: SocialUser;
  isLogged = false;
  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        this.isLogged = true;
        const token = user.idToken;
          this.authService.saveGoogleToken(token, user);
            }
    });
  }

  refreshToken(): void {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
