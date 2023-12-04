import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectedUserComponent } from './connected-user/connected-user.component';
import { ULayoutComponent } from './u-layout/u-layout.component';
import { authGuard } from '../_helper/auth.guard';
import { UserUpdateComponent } from './form/user-update/user-update.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path:'',component:ULayoutComponent,canActivate: [authGuard],children : [
    {path: '',pathMatch:'full', redirectTo:'connectedUser'},
    { path: 'connectedUser', component: ConnectedUserComponent,data: { name: 'user_connected' }
   },
    {path:'updateProfil/:id',component: UserUpdateComponent},
    {path:'transaction/:nftId',component: TransactionComponent}
]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
