

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GalleriesService } from 'src/app/_services/galleries.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-add-gallery',
  templateUrl: './add-gallery.component.html',
  styleUrls: ['./add-gallery.component.sass']
})
export class AddGalleryComponent implements OnInit {
  galleryForm!: FormGroup;
  owner_id: number | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private galleryService: GalleriesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.owner_id = this.retrieveOwnerId();
    this.galleryForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.galleryForm.valid && this.owner_id !== undefined) {
      const formData = this.galleryForm.value;
      this.galleryService.addGallery(formData, this.owner_id).subscribe((data) => {
        this.galleryForm.reset();
      });
    }
  }

  private retrieveOwnerId(): any {
    let id = this.authService.currentUserValue!.user.id;
    let url = "api/users/" + id;
    console.log(url);
    return url;
  }
}

