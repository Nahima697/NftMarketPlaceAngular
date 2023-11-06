import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNftComponent } from './user-nft.component';
import { RouterModule } from '@angular/router';
import { DeleteNftModule } from '../delete-nft/delete-nft.module';



@NgModule({
  declarations: [UserNftComponent],
  imports: [
    CommonModule,
    RouterModule,
    DeleteNftModule
  ],
  exports: [UserNftComponent],
})
export class UserNftModule { }
