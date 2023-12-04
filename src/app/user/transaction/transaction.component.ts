import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/_services/auth.service';
import { GalleriesService } from 'src/app/_services/galleries.service';
import { TransactionService } from 'src/app/_services/transaction.service';
import { UsersService } from 'src/app/_services/users.service';
import { Nft } from 'src/app/interfaces/nft';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.sass'],
  providers: [NgbActiveModal],
})
export class TransactionComponent implements OnInit {
  galleries: any[] = [];
  selectedBuyerGalleryId!: number;
  userId: number | undefined;
  nft!: Nft;
  owner!: User | undefined;
  newGalleryName: string = '';
  transactionForm!: FormGroup;

  constructor(
    private transactionService: TransactionService,
    private userService: UsersService,
    public activeModal: NgbActiveModal,
    private authService: AuthService,
    private route: Router,
    private galleryService: GalleriesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      selectedBuyerGalleryId: [null, Validators.required],
      newGalleryName: ['']
    });
    this.userId = this.authService.currentUserValue.user.id;

    if (this.userId == undefined) {
      this.route.navigate(['/auth']);
    } else {
      this.userService.getUser(this.userId).subscribe(
        (data: any) => {
          this.galleries = data['galleries'];
          console.log(this.galleries);
        },
        (error) => {
          console.error('Erreur lors de la récupération des galeries de l\'utilisateur', error);
        }
      );
    }
  }

  addGallery() {
    this.galleryService
      .addGallery({ name: this.newGalleryName, owner: this.userId })
      .subscribe(
        (response) => {
          if (this.userId !== undefined) {
            this.userService.getUser(this.userId).subscribe(
              (data: any) => {
                this.galleries = data['galleries'];
                console.log(this.galleries);
              },
              (error) => {
                console.error(
                  'Erreur lors de la récupération des galeries de l\'utilisateur',
                  error
                );
              }
            );
          }
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la galerie', error);
        }
      );
  }

  onSubmit() {
    const buyerGalleryId = this.transactionForm.get('selectedBuyerGalleryId')?.value;
    console.log(buyerGalleryId)
    const sellerGalleryId = this.nft.gallery;
    const nftId = this.nft.id;
    console.log(this.nft)
    if (this.selectedBuyerGalleryId === 0) {
      this.addGallery();
    }
    this.transactionService.createTransaction(buyerGalleryId, sellerGalleryId, nftId).subscribe(
      (response) => {

      },
      (error) => {
        console.error('Erreur lors de la création de la transaction', error);
      }
    );
  }

  cancel() {
    this.activeModal.dismiss('Cancel click');
  }
}
