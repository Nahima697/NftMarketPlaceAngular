import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { AuthService } from 'src/app/_services/auth.service';
import { UsersService } from 'src/app/_services/users.service';
import { User } from 'src/app/interfaces/user';
@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.sass'],

})
export class GoogleAuthComponent {
  constructor(private router: Router,  private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private userService:UsersService) {}
  loggedIn?: boolean;
  socialUser!: SocialUser;
  user?:User;
  isLogged = false;
  ngOnInit() {
    this.socialAuthService.authState.subscribe((socialUser) => {
      this.socialUser = socialUser;
      this.loggedIn = socialUser != null;

      if (this.loggedIn) {
        this.isLogged = true;
        const token = socialUser.idToken;
          this.userService.getUserIdByGoogleId(socialUser.id).subscribe((user: User) => {
            console.log(user)
            this.authService.saveGoogleToken(token, user);
          });
      }
    });
    };


  refreshToken(): void {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
