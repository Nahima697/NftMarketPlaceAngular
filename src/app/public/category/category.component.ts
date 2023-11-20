import { Component } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Nft } from 'src/app/interfaces/nft';
import { CategoryService } from 'src/app/_services/category.service';
import { NftService } from 'src/app/_services/nft.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent {
  categories! :Category[];
  nfts:Nft[] = [];
  image?:string ;
  constructor(
    public CategoryService: CategoryService,
    public NftService:NftService
  ) {}

  ngOnInit(): void {
    this.CategoryService.getCategories().subscribe((data: any) => {
        this.categories = data;
        this.categories.forEach((category: Category) => {
          category.nfts = data;
            this.image = category['image'];
            console.log(this.image)
            this.CategoryService.getImage(this.image).subscribe((image) => {
              category.image = image}
              );
          })
        });
    }
    };



