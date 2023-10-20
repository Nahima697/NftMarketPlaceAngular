import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from './parts/side-navigation/side-navigation.component';
import { UserRoutingModule } from './user-routing.module';
import { ULayoutComponent } from './u-layout/u-layout.component';
import { ConnectedUserComponent } from './connected-user/connected-user.component';
import { AddGalleryComponent } from './form/add-gallery/add-gallery.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './form/update-user/update-user.component';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptor } from '../_services/jwt-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddNftComponent } from './form/add-nft/add-nft.component';
import { ChartComponent } from './chart/chart.component';
import { UserNftModule } from '../user-nft/user-nft.module';




@NgModule({
  declarations: [
    ULayoutComponent,
    SideNavigationComponent,
    ConnectedUserComponent,
    AddGalleryComponent,
    AddNftComponent,
    SideNavigationComponent,
    UpdateUserComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UserNftModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    CookieService,
  ],
})
export class UserModule { }
