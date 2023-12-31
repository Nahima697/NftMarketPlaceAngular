import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Nft } from '../../interfaces/nft';
import { NftService } from '../../_services/nft.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TransactionComponent } from 'src/app/user/transaction/transaction.component';
import { AuthService } from 'src/app/_services/auth.service';
import { Gallery } from 'src/app/interfaces/gallery';



@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.sass']
})

export class NftComponent implements OnInit {
  @Input()nfts: Nft[] = [];
  nft?:Nft;
  isLoading: boolean = false;
  filterValues: any = {};
  gallerie?:Gallery;
  @Input() galleries!:Gallery[];
  @ViewChild('transactionModalContent', { static: true, read: ViewContainerRef })
  transactionModalContent!: ViewContainerRef;
  constructor(private nftService: NftService,private modalService: NgbModal,public authService: AuthService) {}
  ngOnInit(): void {
    this.isLoading = true;
    this.loadNfts();
  }

  onFilterChanged(filterValues: any) {
    this.filterValues = filterValues;
    this.loadNfts();
  }
  loadNfts() {
    if (this.filterValues) {
      this.nftService.getFilteredNfts(this.filterValues).subscribe(data => {
        this.nfts = data;
        this.isLoading = false;
      });
    } else {
      this.nftService.getAll().subscribe(data => {
        this.nfts = data;
        this.isLoading = false;
      });
    }
  }

  openPurchaseModal(galleries: any, nft: any) {
    const modalRef = this.modalService.open(this.transactionModalContent);
    this.nft = nft;
  }
  openModal(galleries:any,nft:any) {
    const modalRef = this.modalService.open(TransactionComponent);
    modalRef.componentInstance.galleries = galleries;
    modalRef.componentInstance.nft = nft;
    modalRef.componentInstance.userId = this.authService.currentUserValue?.id;
  }
}
