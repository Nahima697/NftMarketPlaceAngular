import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces/category';
import { Nft } from '../interfaces/nft';
import { environment } from 'environnement';
@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/categories?page=1`)
  }


}
