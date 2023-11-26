import { Component,  OnInit } from '@angular/core';
import { Nft } from 'src/app/interfaces/nft';
import { NftService } from 'src/app/_services/nft.service';

@Component({
  selector: 'app-trend-nft',
  templateUrl: './trend-nft.component.html',
  styleUrls: ['./trend-nft.component.sass']
})
export class TrendNftComponent implements OnInit {
  nfts: Nft[] = [];
  image?:string ;
  constructor(private nftService: NftService) {}

  ngOnInit(): void {
    this.nftService.getTrendNfts().subscribe((data: any) => {
      console.log(data);
      this.nfts = data;

    });
  }

}


