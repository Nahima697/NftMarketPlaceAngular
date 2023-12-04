import { Component, Input, OnInit } from '@angular/core';
import { Gallery } from 'src/app/interfaces/gallery';
import { Nft } from 'src/app/interfaces/nft';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UsersService } from 'src/app/_services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
  loading = false;
  nfts?:Nft[];
  @Input() owner?:User;
  gallery!:Gallery;
  galleries!:Gallery[]
  id?:number
  showUserNft:boolean= false;


  constructor(private authService: AuthService, private usersService: UsersService,private activatedRoute: ActivatedRoute) {}


  ngOnInit() {
    const userId = this.authService.currentUserValue?.user.id;
    const creatorId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '', 10);

    if (userId && !creatorId) {
      this.loading = true;
      this.usersService.getUser(userId).subscribe((data: any) => {
        this.galleries = data.galleries;
        this.owner = data;
        this.nfts = this.gallery?.nfts;
      },
      (error) => {
        this.loading = false;
        console.error('Une erreur s\'est produite lors de la récupération des informations de l\'utilisateur :', error);
      });
    }

    if (creatorId) {
      this.usersService.getUser(creatorId).subscribe((data: any) => {
        this.galleries = data.galleries;
        this.owner = data;

      });
    } else {
      console.error('ID de l\'utilisateur introuvable.');
    }
  }

  toggleShowUserNft() {
    this.showUserNft = !this.showUserNft;
  }
  }

