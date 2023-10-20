import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gallery} from '../interfaces/gallery';
import { TopCreator } from '../interfaces/createurs';
import { Nft } from '../interfaces/nft';
import { User } from '../interfaces/user';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient,private authservice:AuthService) { }
  apiUrl:string ='https://127.0.0.1:8000/api/users'
  token = this.authservice.currentUserValue?.token;
  httoptions = new HttpHeaders({
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });

  getUserGallery(id:number): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(this.apiUrl+'/'+ id +"/galleries"+".json")
  }

  getOne(id:number) {
    return this.http.get<User>(this.apiUrl+'/'+id)
  }

  getUserNfts(id:number):Observable<Nft[]> {
    return this.http.get<Nft[]>(this.apiUrl+'/'+ id +'/nfts')
  }

  getAll(): Observable<TopCreator[]> {
    return this.http.get<TopCreator[]>(this.apiUrl+".json")
  }
 getUsers():Observable<User[]> {
  return this.http.get<User[]>(this.apiUrl+".json")
 }
  getUser(id:number): Observable<User> {
    return this.http.get<User>(this.apiUrl+'/'+ id+".json")
  }
getUserIdByGoogleId(id:string):Observable<number> {
  return this.http.get<number>(this.apiUrl+'/'+ id +'/get_user_id_by_google_id')
}
  checkIfUsernameExists(username: string): Observable<boolean> {

    return this.http.get<boolean>(this.apiUrl, { params: { username } });
  }

  createUser(user:User):Observable<User> {
    return this.http.post<User>(this.apiUrl,user)
  }

  addInfoUser(owner: string | number,formData: FormData,): Observable<User> {
    formData.append('id', owner.toString());
    return this.http.post<User>(`${this.apiUrl}/${owner}/avatar/description`, formData, { headers: this.httoptions });
  }

}
