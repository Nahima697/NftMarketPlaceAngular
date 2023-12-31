
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gallery } from '../interfaces/gallery';
import { Nft } from '../interfaces/nft';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GalleriesService {
  apiUrl: string = 'https://127.0.0.1:8000/api/galleries';
  imageUrl = 'https://127.0.0.1:8000/media/cache/resolve/thumbnail_web_path/uploads/'
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

  addGallery(gallery: Gallery): Observable<Gallery> {
    return this.http.post<Gallery>(`${environment.apiUrl}/galleries`, gallery, { headers: this.httoptions });
}
  getImage(image:string) :Observable<string> {
    return this.http.get<string>(this.imageUrl + image)
  }

}
