import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { Observable } from 'rxjs';
import { APIResponse, Game } from '../models';
@Injectable({
  providedIn: 'root'
})
export class Http {

  constructor(private http: HttpClient) { }

  getGameList(
    ordering: string,
    search?: string,
  ): Observable<APIResponse<Game>>  {
    let params = new HttpParams().set('key', env.RAWG_KEY).set('ordering', ordering);
    if (search) {
      params = new HttpParams().set('key', env.RAWG_KEY).set('ordering', ordering).set('search', search);
    }
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {params: params});
  }
}
