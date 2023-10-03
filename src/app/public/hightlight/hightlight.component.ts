import { Component,  OnInit } from '@angular/core';
import { creator } from 'src/app/interfaces/createurs';
import { Nft } from 'src/app/interfaces/nft';
import { NftService } from 'src/app/_services/nft.service';

@Component({
  selector: 'app-hightlight',
  templateUrl: './hightlight.component.html',
  styleUrls: ['./hightlight.component.sass']
})
export class HightlightComponent implements OnInit {

  constructor(private nftService: NftService) {}

  nft!: Nft;
  user!: creator;

  ngOnInit(): void {

    this.nftService.getHightlightNft().subscribe((nft: Nft) => {
      console.log(nft);
      this.nft = nft;
      this.user = nft.gallery.owner;
      console.log(this.user)
      });
      };
    };


