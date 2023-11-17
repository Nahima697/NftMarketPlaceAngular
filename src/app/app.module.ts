import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NgChartsModule } from 'ng2-charts';
import { PublicModule } from './public/public.module';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { JwtInterceptor } from './_services/jwt-interceptor.service';
import { LazyLoadImagesDirective } from './_directives/lazy-load-images.directive';
import {provideClientHydration} from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    LazyLoadImagesDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgChartsModule,
    PublicModule,
    SocialLoginModule,


  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
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
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
