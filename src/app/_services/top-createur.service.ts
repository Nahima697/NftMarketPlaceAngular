import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TopCreator} from '../interfaces/createurs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopCreateurService {
    apiUrl:string ='https://127.0.0.1:8000/api/users?groups=top-creators';
    imageUrl = 'https://127.0.0.1:8000/media/cache/resolve/thumbnail_web_path/uploads/'
    constructor(private http: HttpClient) { }
    getAll(): Observable<TopCreator[]> {
      return this.http.get<TopCreator[]>(`${environment.apiUrl}/users?groups=top-creators`)
    }
    getImage(image:string) :Observable<string> {
      return this.http.get<string>(this.imageUrl + image)
    }
  }


