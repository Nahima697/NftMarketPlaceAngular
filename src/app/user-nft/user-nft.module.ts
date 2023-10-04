import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNftComponent } from './user-nft.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UserNftComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [UserNftComponent],
})
export class UserNftModule { }
