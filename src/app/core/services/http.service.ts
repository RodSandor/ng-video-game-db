import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';
import { APIResponse } from '../models/api-response';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) {}

  getGameList(ordering:string, search?: string): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams()
        .set('ordering', ordering)
        .set('search', search);
    }

    return this.http
      .get<APIResponse<Game>>(
        `${environment.BASE_URL}/games`, { params: params, }
      );
  }
}
