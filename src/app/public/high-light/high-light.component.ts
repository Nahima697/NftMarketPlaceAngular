import { Component } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { NftService } from 'src/app/_services/nft.service';
import { creator } from 'src/app/interfaces/createurs';
import { Nft } from 'src/app/interfaces/nft';

@Component({
  selector: 'app-high-light',
  templateUrl: './high-light.component.html',
  styleUrls: ['./high-light.component.sass']
})
export class HighLightComponent {
  constructor(private nftService: NftService) {}

  nft$!: Observable<Nft>;
  user!: creator;

  ngOnInit(): void {

    // this.nft$ = this.nftService.getHightlightNft();

    // this.nft$.subscribe((nft: Nft) => {
    //   console.log(nft);
    //   this.nftService.getUserFromNft(nft.id).subscribe((owner: creator) => {
    //     this.user = owner;
    //   });
    // });
  }
}
