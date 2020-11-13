import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Types } from '../models/Types.model';
import { AppSettings } from '../settings/links.config';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(
    private _http: HttpClient
  ) {

  }

  getTypes():Observable<Types[]>{
    return this._http.get<Types[]>(`${AppSettings.API_ENDPOINT}/types`);
  }
}
