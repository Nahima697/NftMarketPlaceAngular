import { Component, HostListener, Input, OnInit } from '@angular/core';
import { GalleriesService } from 'src/app/_services/galleries.service';
import { NftService } from 'src/app/_services/nft.service';
import { Gallery } from 'src/app/interfaces/gallery';
import { Nft } from 'src/app/interfaces/nft';

@Component({
  selector: 'app-trend-galleries',
  templateUrl: './trend-galleries.component.html',
  styleUrls: ['./trend-galleries.component.sass']
})
export class TrendGalleriesComponent implements OnInit {
  galleries!: Gallery[];
  @Input() nfts?: Nft[] = [];
  image?: any;

  constructor(
    public GalleriesService: GalleriesService,
    public NftService: NftService,
  ) {}

  ngOnInit(): void {
    this.GalleriesService.getTrendGalleries().subscribe((data: any) => {
      this.galleries = data;
    });

    this.onWindowResize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event?: Event) {
    if (this.renderer2IsMobile()) {

      console.log('Mobile View');
    } else {

      console.log('Desktop View');
    }

  }

  renderer2IsMobile(): boolean {

    return window.innerWidth < 972;
  }

  renderer2IsXs(): boolean {

    return window.innerWidth < 450;
  }

}
