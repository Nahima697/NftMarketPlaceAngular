import { Component,Input } from '@angular/core';

import { Gallery } from '../interfaces/gallery';
import { Nft } from '../interfaces/nft';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-user-nft',
  templateUrl: './user-nft.component.html',
  styleUrls: ['./user-nft.component.sass']
})
export class UserNftComponent {

  @Input() nfts!:Nft[];
  @Input() gallery!:Gallery;
  @Input() owner!:User;

    }



