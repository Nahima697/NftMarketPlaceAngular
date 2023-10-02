import { Component,  OnInit } from '@angular/core';
import { creator } from 'src/app/interfaces/createurs';
import { Nft } from 'src/app/interfaces/nft';
import { NftService } from 'src/app/_services/nft.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hightlight',
  templateUrl: './hightlight.component.html',
  styleUrls: ['./hightlight.component.sass']
})
export class HightlightComponent implements OnInit {

  constructor(private nftService: NftService) {}

  nft$!: Observable<Nft>;
  user!: creator;

  ngOnInit(): void {

    this.nft$ = this.nftService.getHightlightNft();

    this.nft$.subscribe((nft: Nft) => {
      console.log(nft);
      this.nftService.getUserFromNft(nft.id).subscribe((owner: creator) => {
        this.user = owner;
      });
    });
  }
}
