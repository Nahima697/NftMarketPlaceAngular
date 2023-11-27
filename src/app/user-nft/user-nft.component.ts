import { Component,Input } from '@angular/core';

import { Gallery } from 'src/app/interfaces/gallery';
import { Nft } from 'src/app/interfaces/nft';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-user-nft',
  templateUrl: './user-nft.component.html',
  styleUrls: ['./user-nft.component.sass']
})
export class UserNftComponent {
  constructor(public authService: AuthService){}

  @Input() nfts!:Nft[];
  @Input() gallery!:Gallery;
  @Input() galleries!:Gallery[];
  @Input() owner?:User ;

    }



