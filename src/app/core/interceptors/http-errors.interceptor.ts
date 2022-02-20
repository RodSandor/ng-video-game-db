import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  throwError as observableThrowError,
  Observable,
  catchError,
  pipe
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err)=> {
        console.log(err);

        return observableThrowError(err);
      })
    );
  }
}
