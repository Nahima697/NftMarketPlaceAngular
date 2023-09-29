import { Component,OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from 'src/app/interfaces/gallery';
import { Nft } from 'src/app/interfaces/nft';
import { GalleriesService } from 'src/app/_services/galleries.service';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.sass']
})


export class GalleryDetailComponent implements OnInit {
 gallery!: Nft[];

  constructor(
    private route: ActivatedRoute,
    private galleriesService: GalleriesService
  ) {}

  ngOnInit(): void {
      let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
      console.log(id);
      this.galleriesService.getNftsByGalleries(id).subscribe((dataNfts: Nft[]) => {
        console.log(dataNfts);
        this.gallery = dataNfts;
        console.log(this.gallery);
      });
    };
  }









