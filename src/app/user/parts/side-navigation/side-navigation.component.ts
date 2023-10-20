import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Gallery } from 'src/app/interfaces/gallery';
import { Nft } from 'src/app/interfaces/nft';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/_services/auth.service';
import { SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.sass']
})
export class SideNavigationComponent {
  constructor( private authService:AuthService) {}
    @Input() showGalleryForm!: boolean;
    @Input() showNftForm!: boolean;
    @Input() showUserNft!:boolean;
    @Input() showUpdateUserForm!:boolean;
    @Input() showGraph!:boolean;
    @Input() user?: User ;
    @Input() socialUser?: SocialUser ;
    @Input() nfts!:Nft[];
    @Input() gallery!:Gallery;
    @Input() galleries!:Gallery[];
    @Input() categories!:Category[];
    @Output() showNftFormChange = new EventEmitter<boolean>();
    @Output() showGalleryFormChange = new EventEmitter<boolean>();
    @Output() showUpdateUserFormChange = new EventEmitter<boolean>();
    @Output() showGraphChange = new EventEmitter<boolean>();
    @Output() showUserNftChange = new EventEmitter<boolean>();
    
    logout() {
      this.authService.logout();
    }


    showGalleryFormClick() {
     this.showGalleryForm = !this.showGalleryForm;
     this.showGalleryFormChange.emit(this.showGalleryForm);
    }

    showUpdateUserFormClick() {
      this.showUpdateUserForm = !this.showUpdateUserForm;
      this.showUpdateUserFormChange.emit(this.showUpdateUserForm);
    }

    showUserClick() {
      this.showGalleryForm = true;
    }

    showNftFormClick() {
      this.showNftForm = !this.showNftForm;
      this.showNftFormChange.emit(this.showNftForm);

    }
    showGraphClick() {
      this.showGraph= !this.showGraph;
      this.showGraphChange.emit(this.showGraph);
    }

    showUserNftClick() {
      this.showUserNft= !this.showUserNft;
      this.showUserNftChange.emit(this.showUserNft);

    }
}
