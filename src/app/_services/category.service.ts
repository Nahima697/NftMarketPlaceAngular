import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces/category';
import { Nft } from '../interfaces/nft';
@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  apiUrl:string ='https://127.0.0.1:8000/api/categories?page=1'
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl)
  }


}
