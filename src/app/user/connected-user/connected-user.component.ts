import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Gallery } from 'src/app/interfaces/gallery';
import { Nft } from 'src/app/interfaces/nft';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/_services/auth.service';
import { CategoryService } from 'src/app/_services/category.service';
import { UsersService } from 'src/app/_services/users.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-connected-user',
  templateUrl: './connected-user.component.html',
  styleUrls: ['./connected-user.component.sass']
})
export class ConnectedUserComponent implements OnInit {
    loading:boolean = false;
    showGalleryForm: boolean = false;
    showNftForm: boolean = false;
    showUserNft:boolean = true;
    showUpdateUserForm:boolean = false;
    showGraph:boolean =false;
    user!: User;
    nfts?:Nft[];
    gallery!:Gallery;
    galleries!:Gallery[];
    categories!:Category[];

    constructor(
      private usersService: UsersService,
      private authService:AuthService,
      private categoryService: CategoryService,
      private userService: UsersService,
      private activatedRoute:ActivatedRoute) { }

      ngOnInit() {
        let id = this.authService.currentUserValue?.user.id;
        console.log(this.authService.currentUserValue?.user.id);
          this.loading = true;
          this.usersService.getOne(id!).subscribe(user => {
              this.loading = false;
              this.user = user;
              console.log(user)
          });
          this.usersService.getUser(id!).subscribe((data:any )=> {
            console.log(data);
           this.galleries = data['galleries'];
           console.log(this.galleries);
           this.nfts = this.galleries[0].nfts;
           console.log(this.nfts)
          });

          this.categoryService.getCategories().subscribe((dataCategory:any) => {
            this.categories = dataCategory;
            console.log(dataCategory);
          })

          this.activatedRoute.queryParams.subscribe(params => {
            const token = params['token'];
            const googleId = params['googleId'];
            const id = params['id'];
          });
  }

}
