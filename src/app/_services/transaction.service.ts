import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  token = this.authservice.currentUserValue?.token;
  httoptions = new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${this.token}`
   });

 constructor(private http: HttpClient,private authservice:AuthService) { }

 createTransaction(buyerGalleryId: any, sellerGalleryId: any , nftId: number): Observable<any> {
  const transactionData = {
    buyerGallery:  `/api/galleries/${buyerGalleryId}` ,
    sellerGallery:  `${sellerGalleryId}` ,
    nft: { id: nftId }
  };

  return this.http.post<any>(`${environment.apiUrl}/transactions`, transactionData,{headers:this.httoptions});
}

}
