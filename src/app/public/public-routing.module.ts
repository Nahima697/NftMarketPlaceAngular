import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryDetailComponent } from './galleries/gallery-detail/gallery-detail.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { RegisterFormComponent } from './form/register-form/register-form.component';
import { LoginFormComponent } from './form/login-form/login-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PlayoutComponent } from './playout/playout.component';
import { NftComponent } from './nft/nft.component';
import { NftDetailComponent } from './nft-detail/nft-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PlayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'gallery/:id', component: GalleryDetailComponent },
      { path: 'gallery', component: GalleriesComponent },
      { path: 'nft/:id', component: NftDetailComponent },
      { path: 'nft', component: NftComponent },
      { path: 'registerForm', component: RegisterFormComponent },
      { path: 'auth', component: LoginFormComponent },
      { path: 'profil/:id', component: UserProfileComponent },
      // {path:'**', component:ErrorComponent},
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
