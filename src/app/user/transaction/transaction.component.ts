import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/_services/auth.service';
import { GalleriesService } from 'src/app/_services/galleries.service';
import { TransactionService } from 'src/app/_services/transaction.service';
import { UsersService } from 'src/app/_services/users.service';
import { Nft } from 'src/app/interfaces/nft';
import { User } from 'src/app/interfaces/user';

@Component({
  standalone:true,
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.sass'],
  imports:[CommonModule,ReactiveFormsModule],
  providers: [NgbActiveModal],
})
export class TransactionComponent implements OnInit {
  @Input() galleries: any[] = [];
  @Input() selectedBuyerGalleryId!: number;
  @Input() userId: number | undefined;
  @Input()nft!: Nft;
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
    private fb: FormBuilder,

  ) {   this.transactionForm = this.fb.group({
    selectedBuyerGalleryId: [null, Validators.required],
    newGalleryName: ['']
  });}

  ngOnInit(): void {

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
      .addGallery({ name: this.newGalleryName, owner: `api/users/${this.userId}` })
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
  onChange(value: any) {
    this.selectedBuyerGalleryId = value.target.value;
    console.log(this.selectedBuyerGalleryId);

}
onSubmit() {
  const buyerGalleryId = this.transactionForm.get('selectedBuyerGalleryId')?.value;
  const sellerGalleryId = `api/galleries/${this.nft.gallery.id}`;
  console.log(sellerGalleryId);
  const nftId = this.nft.id;

  if (this.selectedBuyerGalleryId == 0) {
    const newGalleryName = this.transactionForm.get('newGalleryName')?.value;

    if (newGalleryName && newGalleryName.trim() !== '') {

      this.galleryService
        .addGallery({ name: newGalleryName, owner: `api/users/${this.userId}` })
        .subscribe(
          (response) => {

            if (this.userId !== undefined) {
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
          },
          (error) => {
            console.error('Erreur lors de l\'ajout de la galerie', error);
          }
        );
    } else {

      console.error('Le nom de la nouvelle galerie ne peut pas être vide.');
    }
  }

  this.transactionService.createTransaction(buyerGalleryId, sellerGalleryId, nftId).subscribe(
    (response) => {
    },
    (error) => {
      console.error('Erreur lors de la création de la transaction', error);
    }
  );
}

}
