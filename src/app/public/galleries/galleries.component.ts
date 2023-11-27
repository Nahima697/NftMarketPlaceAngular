import { Component, OnInit } from '@angular/core';
import { GalleriesService } from 'src/app/_services/galleries.service';
import { Gallery } from 'src/app/interfaces/gallery';
import { Nft } from 'src/app/interfaces/nft';
import { NftService } from 'src/app/_services/nft.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.sass']
})
export class GalleriesComponent implements OnInit {
  galleries!:Gallery[];
  nfts? :Nft[] = []
  constructor(
    public GalleriesService: GalleriesService,
    public NftService:NftService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.GalleriesService.getGalleries().subscribe((data: any) => {
        this.galleries = data;
        this.galleries.forEach((gallery: Gallery) => {
        this.nfts = gallery.nfts;

          });
        });

      }

      openModal(imageUrl: string,description:string) {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.imageUrl = imageUrl;
        modalRef.componentInstance.description = description;
      }
  }


