import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nft } from '../interfaces/nft';
import { creator } from '../interfaces/createurs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class NftService {
  apiUrl:string ='https://127.0.0.1:8000/api/nfts'
  apiUrlTrend: string ='https://127.0.0.1:8000/api/nfts?itemsPerPage=3&order%5BdropDate%5D=desc'
  apiUrlHight: string ='https://127.0.0.1:8000/api/nfts?page=1&itemsPerPage=1&order%5BsaleDate%5D=desc'

  token = this.authservice.currentUserValue?.token;
 httoptions = new HttpHeaders({
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${this.token}`
  });

constructor(private http: HttpClient,private authservice:AuthService) { }

  getAll(): Observable<Nft[]> {
    return this.http.get<Nft[]>(this.apiUrl)
  }

  getOne(id : number) :Observable<Nft> {
    return this.http.get<Nft>(this.apiUrl+'/'+ id )
  }

  getUserFromNft(id:number):Observable<creator> {
    return this.http.get<creator>(this.apiUrl+'/'+ id +"/"+"user")
  }


  getTrendNfts():Observable<Nft>{
    return this.http.get<Nft>(this.apiUrlTrend)
  }

  getHightlightNft():Observable<Nft[]> {
  return this.http.get<Nft[]>(this.apiUrlHight)
  }

  addNft(nft: FormData, owner: string | number): Observable<Nft> {
    nft.append('owner', owner.toString());
    console.log(this.apiUrl, nft, {headers:this.httoptions});
    return this.http.post<Nft>(this.apiUrl, nft, {headers:this.httoptions});
  }

  getFilteredNfts(filterValues: any): Observable<Nft[]>  {
    let params = new HttpParams();

    if (filterValues.name) {
      params = params.set('name', filterValues.name);
    }
    if (filterValues.galleryName) {
      params = params.set('gallery.name', filterValues.galleryName);
    }
    if (filterValues.categoryName) {
      params = params.set('category.wording', filterValues.categoryName);
    }
    if (filterValues.username) {
      params = params.set('gallery.owner.username', filterValues.username);
    }
    if (filterValues.priceRange1) {
      params = params.set('priceRange1', filterValues.priceRange1);
    }
    if (filterValues.priceRange2) {
      params = params.set('priceRange2', filterValues.priceRange2);
    }
    const url = `${this.apiUrl}?`;
    return this.http.get<Nft[]>(url,{params});
  }

}
