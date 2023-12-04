import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

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

  ngOnInit() {
   
    this.filterForm.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      this.submitForm();
    });
  }

  onInputChange() {

  }

  submitForm() {
    const filterValues = this.filterForm.value;
    this.filterChanged.emit(filterValues);
  }
}
