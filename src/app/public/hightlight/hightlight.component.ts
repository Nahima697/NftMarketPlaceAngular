import { Component, Input, OnInit } from '@angular/core';
import { creator } from 'src/app/interfaces/createurs';
import { Nft } from 'src/app/interfaces/nft';
import { NftService } from 'src/app/_services/nft.service';

@Component({
  selector: 'app-hightlight',
  templateUrl: './hightlight.component.html',
  styleUrls: ['./hightlight.component.sass']
})
export class HightlightComponent implements OnInit{
  nft!:Nft;

  constructor(private nftService:NftService) {}
  ngOnInit(): void {

    this.nftService.getHightlightNft().subscribe((data: any) => {
      console.log(data);
      this.nft = data;
      let id = this.nft.id;
      this.nftService.getUserFromNft(id).subscribe((owner: creator) => {
        console.log(owner);
          this.nft.owner = {
            username: owner.username,
            avatar: owner.avatar
          };

        }
    );

    });
  }
}
