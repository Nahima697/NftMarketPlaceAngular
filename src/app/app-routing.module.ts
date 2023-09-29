import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NftComponent } from './nft/nft.component';
// import { NftDetailComponent } from './nft-detail/nft-detail.component';
// import { TopCreateurComponent } from './user/top-createur/top-createur.component';
// import { UserPageComponent } from './pages/user-page/user-page.component';
// import { GalleryDetailComponent } from './galleries/gallery-detail/gallery-detail.component';
// import { GalleriesComponent } from './galleries/galleries.component';
// import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
// import { CategoryComponent } from './category/category.component';
// import { RegisterFormComponent } from './form/register-form/register-form.component';
// import { LoginFormComponent } from './form/login-form/login-form.component';

import { authGuard } from './_helper/auth.guard';
//  import { ProfileComponent } from './user/profile/profile.component';
import { ErrorComponent } from './_utils/error/error.component';

const routes: Routes = [

{path:'public', loadChildren: () => import('./public/public.module')
.then (m => m.PublicModule)},
{path:'user', loadChildren: () => import('./user/user.module' )
.then (m => m.UserModule),canActivate: [authGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
