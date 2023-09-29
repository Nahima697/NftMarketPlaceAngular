import { Component, OnInit } from '@angular/core';
import { Nft } from '../../interfaces/nft';
import { NftService } from '../../_services/nft.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.sass']
})

export class NftComponent implements OnInit {
  nfts: Nft[] =[];
  isLoading: boolean= false;
 constructor(private nftService:NftService) {}
 ngOnInit() :void {
  this.isLoading= true;
  this.nftService.getAll().subscribe(data=> {
    this.nfts =data;
    console.log(data);
    this.isLoading =false;
  })
 };

}

