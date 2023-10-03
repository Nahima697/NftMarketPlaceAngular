import { Component, OnInit } from '@angular/core';
import { GalleriesService } from 'src/app/_services/galleries.service';
import { Gallery } from 'src/app/interfaces/gallery';
import { Nft } from 'src/app/interfaces/nft';
import { NftService } from 'src/app/_services/nft.service';

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
    public NftService:NftService
  ) {}

  ngOnInit(): void {
    this.GalleriesService.getGalleries().subscribe((data: any) => {
        this.galleries = data;
        this.galleries.forEach((gallery: Gallery) => {
          console.log(gallery)
        this.nfts = gallery.nfts;
          console.log(this.nfts);
          console.log(gallery.description)
          });
        });
      }
  ;

  }


