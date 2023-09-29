import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TopCreator} from '../interfaces/createurs';

@Injectable({
  providedIn: 'root'
})
export class TopCreateurService {
    apiUrl:string ='https://127.0.0.1:8000/api/users?groups=top-creators'
    constructor(private http: HttpClient) { }
    getAll(): Observable<TopCreator[]> {
      return this.http.get<TopCreator[]>(this.apiUrl+".json")
    }
  }


