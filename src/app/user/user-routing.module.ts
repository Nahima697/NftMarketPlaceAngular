import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectedUserComponent } from './connected-user/connected-user.component';

import { ULayoutComponent } from './u-layout/u-layout.component';
import { authGuard } from '../_helper/auth.guard';


const routes: Routes = [
  {path:'',component:ULayoutComponent,children : [
    {path: '',pathMatch:'full', redirectTo:'connectedUser'},

  { path: 'connectedUser', component: ConnectedUserComponent,canActivate: [authGuard],},
]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
