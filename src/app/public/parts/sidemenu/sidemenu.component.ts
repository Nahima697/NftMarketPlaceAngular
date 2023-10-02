import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { NftService } from 'src/app/_services/nft.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.sass']
})
export class SidemenuComponent {
  constructor(private fb: FormBuilder, private nftService: NftService) {}

  filterForm = this.fb.group({
    name: [''],
    galleryName: [''],
    categoryName: [''],
    username: [''],
    minPrice: [''],
    maxPrice: [''],
  });

  @Input() filterValues: any;

  @Output() filterChanged = new EventEmitter<any>();


  submitForm() {
    const filterValues = this.filterForm.value;
    this.filterChanged.emit(filterValues);
  }
}
