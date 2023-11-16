import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environnement';
import { TokenUser, User } from 'src/app/interfaces/user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { JwtPayload, jwtDecode } from "jwt-decode";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ providedIn: 'root' })

export class AuthService {
  private currentUserSubject: BehaviorSubject<TokenUser | null | any>;
  public currentUser: Observable<TokenUser | null |  any>;
  private apiGoogle ='https://127.0.0.1:8000/connect/google';
  jwtToken?: string;
  decodedToken?: JwtPayload;

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
              this.cookieService.set
              ('currentUser', JSON.stringify(user),undefined, undefined, undefined, true, 'Strict');
              this.currentUserSubject.next(user);
                return user;
            }));
    }

    // loginWithGoogle() {
    //   window.location.href = 'https://127.0.0.1:8000/connect/google';
    //   return new Observable((observer) => {
    //     const handleResponse = (event: MessageEvent) => {
    //       if (event.origin === 'https://127.0.0.1:8000') {
    //         const responseData = event.data;
    //         if (responseData && responseData.token && responseData.id) {
    //           const user = { token: responseData.token, id: responseData.id };
    //           this.currentUserSubject.next(user);
    //           console.log(user)
    //           this.cookieService.set('currentUser', JSON.stringify(user), undefined, undefined, undefined, true, 'None');
    //           observer.next(responseData);
    //           observer.complete();
    //           window.removeEventListener('message', handleResponse);
    //         }
    //       }
    //     };

    //     window.addEventListener('message', handleResponse);
    //   });
    // }

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
    saveGoogleToken(token: string, user:User) {
      const tokenGoogleUser: any = { token: token,user};
      this.currentUserSubject.next(tokenGoogleUser);
      this.cookieService.set('googleUser', JSON.stringify(tokenGoogleUser));
      this.router.navigate(['/user/connectedUser']);
    }


  decodeToken(jwtToken:any): any {

    return jwtDecode(jwtToken);

}

    getToken(): string | null {
      return this.cookieService.get('currentUser') || this.cookieService.get('googleUser');
    }

    // refreshToken() {
    //   return this.http.post(`${environment.apiUrl}/auth` + 'refreshtoken', { }, httpOptions);
    // }

    authenticateWithGoogle(idToken: string): Observable<any> {
      const body = { id_token: idToken };
      return this.http.post(this.apiGoogle, body);
    }

    }

