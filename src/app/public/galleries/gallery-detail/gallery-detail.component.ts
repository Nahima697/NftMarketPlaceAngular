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
nfts!: Nft[];
gallery!:Gallery;

  constructor(
    private route: ActivatedRoute,
    private galleriesService: GalleriesService
  ) {}

  ngOnInit(): void {
      let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
      console.log(id);
      this.galleriesService.getNftsByGalleries(id).subscribe((data: any) => {
        console.log(data);
        this.gallery = data;
        this.nfts = data.nfts;
        
        console.log(this.nfts);
      });
    };
  }









