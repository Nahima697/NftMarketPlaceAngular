import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NftService } from 'src/app/_services/nft.service';
import { Nft } from 'src/app/interfaces/nft';
@Component({
  selector: 'app-nft-detail',
  templateUrl: './nft-detail.component.html',
  styleUrls: ['./nft-detail.component.sass']
})

export class NftDetailComponent implements OnInit {

  @Input() nft!: Nft;
  isLoading: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private nftService: NftService,
  ) {}

  ngOnInit(): void {

    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '');
    this.nftService.getOne(id).subscribe(data => {
      this.nft = data;

      });
    ;
  }



    }




