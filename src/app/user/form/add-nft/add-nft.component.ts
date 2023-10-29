import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';
import { Gallery } from 'src/app/interfaces/gallery';
import { AuthService } from 'src/app/_services/auth.service';
import { NftService } from 'src/app/_services/nft.service';

@Component({
  selector: 'app-add-nft',
  templateUrl: './add-nft.component.html',
  styleUrls: ['./add-nft.component.sass']
})
export class AddNftComponent implements OnInit {
  nftForm!: FormGroup;
  owner_id: number | undefined;
  @Input() categories: Category[] = [];
  @Input() galleries: Gallery[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private nftService: NftService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.owner_id = this.retrieveOwnerId();
    this.nftForm = this.formBuilder.group({
      name: ['', Validators.required],
      image: [null, Validators.required],
      category: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      dropDate: ['', Validators.required],
      price: [1, [Validators.required, Validators.min(0)]],
      gallery: [''],
    });
  }

  onSubmit() {
    const nftData = {
      name: this.nftForm.get('name')?.value,
      category: `api/categories/ ${this.nftForm.get('category')?.value}`,
      quantity: parseInt(this.nftForm.get('quantity')?.value, 10),
      dropDate: this.nftForm.get('dropDate')?.value,
      price: parseFloat(this.nftForm.get('price')?.value),
      gallery: `api/galleries/${this.nftForm.get('gallery')?.value}`,
    };

    const formData = new FormData();
    formData.append('data', JSON.stringify(nftData));
    const imageFile = this.nftForm.get('image')?.value;
    formData.append('image', imageFile);

    this.nftService.addNft(formData, this.owner_id!).subscribe((data) => {
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.nftForm.get('image')?.setValue(file);
  }

  private retrieveOwnerId(): any {
    let id = this.authService.currentUserValue!.user.id;
    console.log(id)
    let url = "api/users/" + id;
    console.log(url);
    return url;
  }
}
