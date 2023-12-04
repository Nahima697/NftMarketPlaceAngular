import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nft } from '../interfaces/nft';
import { creator } from '../interfaces/createurs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NftService {

  imageUrl = 'https://127.0.0.1:8000/media/cache/resolve/thumbnail_web_path/uploads/'

  token = this.authservice.currentUserValue?.token;
 httoptions = new HttpHeaders({
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${this.token}`
  });

constructor(private http: HttpClient,private authservice:AuthService) { }

  getAll(): Observable<Nft[]> {
    return this.http.get<Nft[]>(`${environment.apiUrl}/nfts`)
  }

  getOne(id : number) :Observable<Nft> {
    return this.http.get<Nft>(`${environment.apiUrl}/nfts/${id}`)
  }
  getImage(image:string) :Observable<string> {
    return this.http.get<string>(this.imageUrl + image)
  }
  getUserFromNft(id:number):Observable<creator> {
    return this.http.get<creator>(`${environment.apiUrl}/nfts/${id}/user`)
  }


  getTrendNfts():Observable<Nft>{
    return this.http.get<Nft>(`${environment.apiUrl}/nfts?itemsPerPage=3&order%5BdropDate%5D=desc`,{headers:this.httoptions})
  }

  getHightlightNft():Observable<Nft[]> {
  return this.http.get<Nft[]>(`${environment.apiUrl}/nfts?page=1&itemsPerPage=1&order%5BsaleDate%5D=desc`,{headers:this.httoptions})
  }

  addNft(nft: FormData, owner: string | number): Observable<Nft> {
    nft.append('owner', owner.toString());
    return this.http.post<Nft>(`${environment.apiUrl}/nfts`, nft, {headers:this.httoptions});
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
    if (filterValues.minPrice) {
      params = params.set('price[gt]',filterValues.minPrice);
    }
    if (filterValues.maxPrice) {
      params= params.set('price[lt]',filterValues.maxPrice);
    }
    const url = `${environment.apiUrl}/nfts`;
    return this.http.get<Nft[]>(url,{params});
  }
  deleteNft(id:number):Observable<any>{
    return this.http.delete<Nft>(`${environment.apiUrl}/nfts/${id}`, {headers:this.httoptions});
}

}
