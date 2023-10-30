
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gallery } from '../interfaces/gallery';
import { Nft } from '../interfaces/nft';
import { environment } from 'environnement';


@Injectable({
  providedIn: 'root'
})
export class GalleriesService {
  apiUrl: string = 'https://127.0.0.1:8000/api/galleries';

  constructor(
    private http: HttpClient) {}

  httoptions = new HttpHeaders({
    'Content-Type': 'application/json',
  });


  getGalleries(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(`${environment.apiUrl}/galleries`);
  }
  getTrendGalleries(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(`${environment.apiUrl}/galleries?itemsPerPage=3`);
  }
  getNftsByGalleries(id: number): Observable<Nft[]> {
    return this.http.get<Nft[]>(`${environment.apiUrl}/galleries/${id}`);
  }

  addGallery(gallery: Gallery, owner:string|number): Observable<Gallery> {
    gallery.owner = owner;
    return this.http.post<Gallery>(`${environment.apiUrl}/galleries`, gallery, { headers: this.httoptions });
}

}
