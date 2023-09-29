import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavigationComponent } from './parts/navigation/navigation.component';
import { TopCreateurComponent } from './top-createur/top-createur.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { CategoryComponent } from './category/category.component';
import { TrendNftComponent } from './trend-nft/trend-nft.component';
import { HightlightComponent } from './hightlight/hightlight.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { GalleryDetailComponent } from './galleries/gallery-detail/gallery-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserNftComponent } from './user-nft/user-nft.component';
import { PlayoutComponent } from './playout/playout.component';
import { PublicRoutingModule } from './public-routing.module';
import { NftComponent } from './nft/nft.component';
import { NftDetailComponent } from './nft-detail/nft-detail.component';
import { LoginFormComponent } from './form/login-form/login-form.component';
import { RegisterFormComponent } from './form/register-form/register-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorComponent } from '../_utils/error/error.component';
import { GoogleAuthComponent } from './form/google-auth/google-auth.component';
import { FooterComponent } from './parts/footer/footer.component';
import { TrendGalleriesComponent } from './galleries/trend-galleries/trend-galleries.component';


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
    CategoryDetailComponent,
    GalleryDetailComponent,
    UserNftComponent,
    PlayoutComponent,
    NftComponent,
    NftDetailComponent,
    LoginFormComponent,
    RegisterFormComponent,
    GoogleAuthComponent,
    FooterComponent,
    TrendGalleriesComponent,


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
  ]


})
export class PublicModule { }
