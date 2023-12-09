import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNftComponent } from './user-nft.component';
import { RouterModule } from '@angular/router';
import { DeleteNftModule } from '../delete-nft/delete-nft.module';
import { TransactionComponent } from '../user/transaction/transaction.component';



@NgModule({
  declarations: [UserNftComponent],
  imports: [
    CommonModule,
    RouterModule,
    DeleteNftModule,
   TransactionComponent,
  ],
  exports: [UserNftComponent],
})
export class UserNftModule { }
