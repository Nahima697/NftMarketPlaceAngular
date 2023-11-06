import { Component, Input } from '@angular/core';
import { NftService } from 'src/app/_services/nft.service';
import { Nft } from 'src/app/interfaces/nft';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-delete-nft',
  templateUrl: './delete-nft.component.html',
  styleUrls: ['./delete-nft.component.sass']
})
export class DeleteNftComponent {
constructor(private nftService:NftService) {}
@Input()nft?:Nft;
@Input()user?:User;

  deleteNft() :void{
    if(this.nft) {
      this.nftService.deleteNft(this.nft.id).subscribe(
        () => {
          console.log('Le Nft est bien supprimé')

        },
        (error) => {
          console.error('Erreur lors de la suppression :', error);
        }
      );
    }
    }

  }

