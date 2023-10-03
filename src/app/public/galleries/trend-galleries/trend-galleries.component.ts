import { Component, Input, OnInit } from '@angular/core';
import { GalleriesService } from 'src/app/_services/galleries.service';
import { NftService } from 'src/app/_services/nft.service';
import { Gallery } from 'src/app/interfaces/gallery';
import { Nft } from 'src/app/interfaces/nft';

@Component({
  selector: 'app-trend-galleries',
  templateUrl: './trend-galleries.component.html',
  styleUrls: ['./trend-galleries.component.sass']
})
export class TrendGalleriesComponent implements OnInit{
  galleries!:Gallery[];
  @Input()nfts? :Nft[] = []

  constructor(
    public GalleriesService: GalleriesService,
    public NftService:NftService
  ) {}

  ngOnInit(): void {
    this.GalleriesService.getTrendGalleries().subscribe((data: any) => {
        this.galleries = data;
        this.galleries.forEach((gallery: Gallery) => {
        this.nfts = gallery.nfts;
          console.log(this.nfts);
          });
        });
      }
  ;

}
