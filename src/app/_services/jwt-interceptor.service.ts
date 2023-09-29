import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders, // Importez HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environnement';
import { AuthService } from './auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let currentUser = this.authService.currentUserValue;

    let headers = new HttpHeaders();

    if(request.url !== `${environment.apiUrl}/auth`) {
      if (currentUser && currentUser.token) {
        headers = headers.set('Authorization', `Bearer ${currentUser.token}`);

      if (request.method === 'POST' && request.body instanceof FormData) {
        headers = headers.set('Content-Type', 'multipart/form-data');
        headers = headers.set('Authorization', `Bearer ${currentUser.token}`);
      }

    };
      request = request.clone({
        headers,
      });
    }

    return next.handle(request);
  }
}
