import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces/category';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  imageUrl = 'https://127.0.0.1:8000/media/cache/resolve/thumbnail_web_path/uploads/'
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/categories?page=1`)
  }

  getImage(image:string) :Observable<string> {
    return this.http.get<string>(this.imageUrl + image)
  }

}
