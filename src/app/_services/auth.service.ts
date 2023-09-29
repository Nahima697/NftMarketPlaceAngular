import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environnement';
import { TokenUser, User } from 'src/app/interfaces/user';

import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class AuthService {
  private currentUserSubject: BehaviorSubject<TokenUser | null>;
  public currentUser: Observable<TokenUser | null>;
  private apiGoogle ='https://127.0.0.1:8000/connect/google';
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
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

    public get currentUserValue(): TokenUser| null {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/auth`, { username, password })
            .pipe(map(user => {
                this.cookieService.set('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        this.cookieService.delete('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigate(['/loginForm']);
    }

    saveToken(token: string,user:User): void {
      const tokenUser: TokenUser = { token: token,user: user};
      this.currentUserSubject.next(tokenUser);
      this.router.navigate(['/user/connectedUser']);
    }


    isLogged(): boolean {
      const token = this.cookieService.get('currentUser');
      return !!token;
    }

    getToken(): string | null {
      return this.cookieService.get('currentUser');
    }


    authenticateWithGoogle(idToken: string): Observable<any> {
      const body = { id_token: idToken };
      return this.http.post(this.apiGoogle, body);
    }
    }

