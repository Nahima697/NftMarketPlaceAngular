import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './_helper/auth.guard';
import { ErrorComponent } from './_utils/error/error.component';

const routes: Routes = [

{path:'public', loadChildren: () => import('./public/public.module')
.then (m => m.PublicModule)},
{path:'user', loadChildren: () => import('./user/user.module' )
.then (m => m.UserModule),canActivate: [authGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
