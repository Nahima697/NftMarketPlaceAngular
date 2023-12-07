import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/_services/auth.service';
import { NftService } from 'src/app/_services/nft.service';
import { Gallery } from 'src/app/interfaces/gallery';
import { Nft } from 'src/app/interfaces/nft';
import { TransactionComponent } from 'src/app/user/transaction/transaction.component';
@Component({
  selector: 'app-nft-detail',
  templateUrl: './nft-detail.component.html',
  styleUrls: ['./nft-detail.component.sass']
})

export class NftDetailComponent implements OnInit {

  @Input() nft!: Nft;
  isLoading: boolean = false;
  @Input() galleries!:Gallery[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private nftService: NftService,
    private modalService: NgbModal,public authService: AuthService
  ) {}

  ngOnInit(): void {

    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '');
    this.nftService.getOne(id).subscribe(data => {
      this.nft = data;

      });
    ;
  }
  openModal(galleries:any,nft:any) {
    const modalRef = this.modalService.open(TransactionComponent);
    modalRef.componentInstance.galleries = galleries;
    modalRef.componentInstance.nft = nft;
    modalRef.componentInstance.userId = this.authService.currentUserValue?.id;
  }

    }




