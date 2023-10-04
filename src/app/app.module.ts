import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './_services/jwt-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { NgChartsModule } from 'ng2-charts';
import { PublicModule } from './public/public.module';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    PublicModule,
    NgChartsModule,

  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
