import { Component,OnInit } from '@angular/core';
import { TopCreator } from '../../interfaces/createurs';
import { UsersService } from 'src/app/_services/users.service';
import { Nft } from 'src/app/interfaces/nft';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-top-createur',
  templateUrl: './top-createur.component.html',
  styleUrls: ['./top-createur.component.sass']
})
export class TopCreateurComponent implements OnInit {
  topCreators: TopCreator[] = [];
  isLoading: boolean= false;
  nfts!:Nft[];
  constructor(private UsersService:UsersService, private router: Router) {}
  ngOnInit(): void {

  this.UsersService.getAll().subscribe((data:any)=> {
    this.topCreators = [];
    this.topCreators = data.sort((a:any, b:any) => b.totalSales - a.totalSales);
    console.log(this.topCreators)


  });



  }
  navigateToUserProfile(creatorId: number) {
    this.router.navigate(['/profil', creatorId]);
  }

}
