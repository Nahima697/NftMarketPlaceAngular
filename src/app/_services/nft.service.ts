import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  apiUrlTrend: string ='https://127.0.0.1:8000/api/nfts?page=1&order%5BdropDate%5D=desc'
  apiUrlHight: string ='https://127.0.0.1:8000/api/nfts?name=Grafittix'

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
    return this.http.get<Nft>(this.apiUrlTrend+'.json')
  }

  getHightlightNft():Observable<Nft> {

  return this.http.get<Nft>(this.apiUrlHight)
  }

  addNft(nft: FormData, owner: string | number): Observable<Nft> {
    nft.append('owner', owner.toString());
    console.log(this.apiUrl, nft, {headers:this.httoptions});
    return this.http.post<Nft>(this.apiUrl, nft, {headers:this.httoptions});
  }

}
