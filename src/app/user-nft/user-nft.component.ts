import { Component,Input, ViewChild, ViewContainerRef } from '@angular/core';

import { Gallery } from 'src/app/interfaces/gallery';
import { Nft } from 'src/app/interfaces/nft';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../_services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TransactionComponent } from '../user/transaction/transaction.component';


@Component({
  selector: 'app-user-nft',
  templateUrl: './user-nft.component.html',
  styleUrls: ['./user-nft.component.sass']
})
export class UserNftComponent {
  constructor(public authService: AuthService,private modalService: NgbModal){}
  @ViewChild('transactionModalContent', { static: true, read: ViewContainerRef })
  transactionModalContent!: ViewContainerRef;
   nft?:Nft;
  @Input() nfts?:Nft[];
  @Input() gallery!:Gallery;
  @Input() galleries!:Gallery[];
  @Input() owner?:User ;
  openPurchaseModal(galleries: any, nft: any) {
    const modalRef = this.modalService.open(this.transactionModalContent);
    this.nft = nft;
  }
  }




