import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gallery} from '../interfaces/gallery';
import { TopCreator } from '../interfaces/createurs';
import { Nft } from '../interfaces/nft';
import { User } from '../interfaces/user';
import { AuthService } from './auth.service';
import { environment } from 'environnement';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient,private authservice:AuthService) { }
  token = this.authservice.currentUserValue?.token;
  httoptions = new HttpHeaders({
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });

  getUserGallery(id:number): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(`${environment.apiUrl}/users/${id}/galleries`)
  }

  getOne(id:number) {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`)
  }

  getUserNfts(id:number):Observable<Nft[]> {
    return this.http.get<Nft[]>(`${environment.apiUrl}/users/${id}/nfts` )
  }

  getAll(): Observable<TopCreator[]> {
    return this.http.get<TopCreator[]>(`${environment.apiUrl}/users`)
  }
 getUsers():Observable<User[]> {
  return this.http.get<User[]>(`${environment.apiUrl}/users`)
 }
  getUser(id:number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users`+'/'+ id)
  }
getUserIdByGoogleId(id:string):Observable<User> {
  return this.http.get<User>(`${environment.apiUrl}/users/google/`+ id )
}
 updateUser(id: number,username: string,password:string): Observable<string[]> {
    return this.http.put<string[]>(`${environment.apiUrl}/users/${id}`, { params: { username,password} });
  }

  createUser(user:User):Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`,user)
  }

  addInfoUser(owner: string | number,formData: FormData,): Observable<User> {
    formData.append('id', owner.toString());
    return this.http.post<User>(`${environment.apiUrl}/${owner}/avatar/description`, formData, { headers: this.httoptions });
  }

}
