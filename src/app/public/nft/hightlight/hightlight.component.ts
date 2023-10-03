import { Component, OnInit } from '@angular/core';
import { creator } from 'src/app/interfaces/createurs';
import { Nft } from 'src/app/interfaces/nft';
import { NftService } from 'src/app/_services/nft.service';
import { Observable } from 'rxjs';
import { Gallery } from 'src/app/interfaces/gallery';

@Component({
  selector: 'app-hightlight',
  templateUrl: './hightlight.component.html',
  styleUrls: ['./hightlight.component.sass']
})
export class HightlightComponent implements OnInit {

  constructor(private nftService: NftService) {}

  nft$!: Observable<Nft[]>;
  gallery!: Gallery;
  user!: creator;

  ngOnInit(): void {
    this.nft$ = this.nftService.getHightlightNft();

    this.nft$.subscribe((nfts: Nft[]) => {
      if (nfts.length > 0) {
        const nft = nfts[0]; 
        console.log(nft);
        this.gallery = nft.gallery;
        this.user = this.gallery.owner;
      }
    });
  }
}
