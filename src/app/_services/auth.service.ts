import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environnement';
import { TokenUser, User } from 'src/app/interfaces/user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ providedIn: 'root' })

export class AuthService {
  private currentUserSubject: BehaviorSubject<TokenUser | null>;
  public currentUser: Observable<TokenUser | null>;
  private apiGoogle ='https://127.0.0.1:8000/connect/google';
  private authUrl ='https://127.0.0.1:8000'

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
  )

{

    this.currentUserSubject = new BehaviorSubject<TokenUser | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
    const storedUser = this.cookieService.get('currentUser');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        this.currentUserSubject.next(user);
    }
  }

    public get currentUserValue(): TokenUser| null | any {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.aut}`, { username, password })
            .pipe(map(user => {
                this.cookieService.set('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        this.cookieService.delete('currentUser');
        this.cookieService.delete('googleUser');
        this.currentUserSubject.next(null);
        this.router.navigate(['/auth']);
    }

    saveToken(token: string,user:User): void {
      const tokenUser: TokenUser = { token: token,user: user};
      this.currentUserSubject.next(tokenUser);
      this.router.navigate(['/user/connectedUser']);
    }

    isLogged(): boolean {
      const currentUser = this.cookieService.get('currentUser');
      const googleUser = this.cookieService.get('googleUser');
      return !!(currentUser || googleUser );
    }
    saveGoogleToken(token: string, user: User) {
      const tokenGoogleUser: any = { idToken: token, user: user };
      this.currentUserSubject.next(tokenGoogleUser);
      this.cookieService.set('googleUser', JSON.stringify(tokenGoogleUser));
      this.router.navigate(['/user/connectedUser']);
    }

    getToken(): string | null {
      return this.cookieService.get('currentUser') || this.cookieService.get('googleUser');
    }

    refreshToken() {
      return this.http.post(`${environment.apiUrl}/auth` + 'refreshtoken', { }, httpOptions);
    }

    authenticateWithGoogle(idToken: string): Observable<any> {
      const body = { id_token: idToken };
      return this.http.post(this.apiGoogle, body);
    }

    }

