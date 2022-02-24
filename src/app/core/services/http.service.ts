import { Game } from 'src/app/core/models/game';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { forkJoin, map, Observable } from 'rxjs';

import { environment } from './../../../environments/environment';
import { APIResponse } from '../models/api-response';

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

  getGameDetails(id: string): Observable<Game> {
    const gameInfoReq = this.http.get(`${environment.BASE_URL}/games/${id}`);
    const gameTrailerReq = this.http.get(`${environment.BASE_URL}/games/${id}/movies`);
    const gameScreenshotReq = this.http.get(`${environment.BASE_URL}/games/${id}/screenshot`);

    return forkJoin({
      gameInfoReq,
      gameScreenshotReq,
      gameTrailerReq,
    }).pipe(
      map((res: any)=> {
        return {
          ...res['gameInfoReq'],
          Screenshots: res['gameScreenshotReq']?.results,
          trailers: res['gameTrailerReq']?.results
        }
      })
    );
  }
}
