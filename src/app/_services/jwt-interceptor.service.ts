import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  constructor(private authService: AuthService,private cookieService:CookieService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let currentUser = this.authService.currentUserValue;

    if (
      request.url !== `${environment.apiUrl}/auth`

    ) {
      if (currentUser && currentUser.token) {
        const headers = new HttpHeaders().set(
          'Authorization',
          `Bearer ${currentUser.token}`
        );

        request = request.clone({
          headers,
        });
      }
    }

    return next.handle(request).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !request.url.includes('auth') &&
          error.status === 401
        ) {
          return throwError(() => error);
        }

        return throwError(() => error);
      })
    );
  }

//   private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
//     if (!this.isRefreshing) {
//       this.isRefreshing = true;

//       if (this.cookieService.get('currentUser')) {
//         return this.authService.refreshToken().pipe(
//           switchMap(() => {
//             this.isRefreshing = false;

//             return next.handle(request);
//           }),
//           catchError((error) => {
//             this.isRefreshing = false;

//             return throwError(() => error);
//           })
//         );
//       }
//     }

//     return next.handle(request);
// }
}
