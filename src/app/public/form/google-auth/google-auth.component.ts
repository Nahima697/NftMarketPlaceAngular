import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { AuthService } from 'src/app/_services/auth.service';
import { UsersService } from 'src/app/_services/users.service';
import { TokenUser, User } from 'src/app/interfaces/user';
import { map } from 'rxjs';
@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.sass'],

})
export class GoogleAuthComponent implements OnInit{
  constructor(private router: Router,  private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private userService:UsersService) {}
  loggedIn?: boolean;
  socialUser!: SocialUser;
  user!: any;
  isLogged = false;
ngOnInit(): void {
  this.socialAuthService.authState.subscribe((socialUser) => {
    this.socialUser = socialUser;
    this.loggedIn = socialUser != null;
    if (this.loggedIn) {
      this.isLogged = true;
        this.userService.getUserIdByGoogleId(socialUser.id).subscribe((user: any) => {
          const decodedToken = this.authService.decodeToken(user.token);
          this.authService.saveGoogleToken(user.token, decodedToken);
        });
    }
  });
  };


  refreshToken(): void {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
