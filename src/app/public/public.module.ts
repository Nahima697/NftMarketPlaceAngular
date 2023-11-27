import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavigationComponent } from './parts/navigation/navigation.component';
import { TopCreateurComponent } from './top-createur/top-createur.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { CategoryComponent } from './category/category.component';
import { TrendNftComponent } from './trend-nft/trend-nft.component';
import { HightlightComponent } from './nft/hightlight/hightlight.component';
import { GalleryDetailComponent } from './galleries/gallery-detail/gallery-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayoutComponent } from './playout/playout.component';
import { PublicRoutingModule } from './public-routing.module';
import { NftComponent } from './nft/nft.component';
import { NftDetailComponent } from './nft-detail/nft-detail.component';
import { LoginFormComponent } from './form/login-form/login-form.component';
import { RegisterFormComponent } from './form/register-form/register-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleAuthComponent } from './form/google-auth/google-auth.component';
import { FooterComponent } from './parts/footer/footer.component';
import { TrendGalleriesComponent } from './galleries/trend-galleries/trend-galleries.component';
import { BackgroundImageDirective } from '../_directives/background-image.directive';
import { SidemenuComponent } from './parts/sidemenu/sidemenu.component';
import { UserNftModule } from '../user-nft/user-nft.module';
import { CookieService } from 'ngx-cookie-service';
import {SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig, GoogleSigninButtonModule, } from '@abacritt/angularx-social-login';
import { ModalComponent } from './galleries/modal/modal.component';
import { LegalNoticeComponent } from './LegalNotice/legal-notice/legal-notice.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserProfileComponent,
    NavigationComponent,
    TopCreateurComponent,
    GalleriesComponent,
    GalleryDetailComponent,
    CategoryComponent,
    TrendNftComponent,
    HightlightComponent,
    GalleryDetailComponent,
    PlayoutComponent,
    NftComponent,
    NftDetailComponent,
    LoginFormComponent,
    RegisterFormComponent,
    GoogleAuthComponent,
    FooterComponent,
    TrendGalleriesComponent,
    BackgroundImageDirective,
    SidemenuComponent,
    ModalComponent,
    LegalNoticeComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    ReactiveFormsModule,
    UserNftModule,
  ],

  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '368535994642-425lq17e547hq1a1ills6q9njq6522je.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    CookieService,
  ],

})
export class PublicModule { }
