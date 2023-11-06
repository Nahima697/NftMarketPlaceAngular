import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeleteNftComponent } from './delete-nft.component';



@NgModule({
  declarations: [DeleteNftComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [DeleteNftComponent],
})
export class DeleteNftModule { }
