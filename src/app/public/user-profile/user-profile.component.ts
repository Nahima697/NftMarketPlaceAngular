import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/interfaces/gallery';
import { Nft } from 'src/app/interfaces/nft';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
  loading = false;
  nfts!:Nft[];
  owner!:User;
  gallery!:Gallery;
  id!:number
  showUserNft:boolean= false;
  constructor(private authService: AuthService, private usersService: UsersService) {}

  ngOnInit() {
    const userId = this.authService.currentUserValue?.user.id;

    if (userId) {
      this.loading = true;
      this.usersService.getUser(userId).subscribe((data:any)=> {
        console.log(data);
       this.gallery = data['galleries'][0];
       console.log(this.gallery);
       this.owner = data;
       this.nfts = this.gallery.nfts
            },
        (error) => {
          this.loading = false;
          console.error('Une erreur s\'est produite lors de la récupération des informations de l\'utilisateur :', error);
        }
      );
    } else {
      console.error('ID de l\'utilisateur introuvable.');
    }
  }

  toggleShowUserNft() {
    this.showUserNft = !this.showUserNft;
}
  }

