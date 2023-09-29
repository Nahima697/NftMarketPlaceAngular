import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { Nft } from 'src/app/interfaces/nft';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.sass']
})
export class CategoryDetailComponent {
  category!: Category;
  nfts!:Nft[];

  constructor(
    private route: ActivatedRoute,
    private CategoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
      this.CategoryService.getNftsByCategory(id).subscribe((dataNfts: any) => {
        this.nfts = dataNfts['nfts'];
      });
    });
  }
}
