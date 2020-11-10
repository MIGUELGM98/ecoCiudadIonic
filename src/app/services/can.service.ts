import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Can } from '../models/Can.model';
import { AppSettings } from '../settings/links.config';

@Injectable({
  providedIn: 'root'
})
export class CanService {

  constructor(
    private _http: HttpClient
  ) { }

  findById(id):Observable<Can>{
    return this._http.get<Can>(`${AppSettings.API_ENDPOINT}/can/${id}`);
  }
}
