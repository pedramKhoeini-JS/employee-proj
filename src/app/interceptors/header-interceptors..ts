import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = '';
    const clonedRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + token,
      },
    });
    return next.handle(clonedRequest);
  }
}
