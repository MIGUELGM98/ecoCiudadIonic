import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marker } from '../models/Marker.model';
import { AppSettings } from '../settings/links.config';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(
    private _http: HttpClient
  ) { }

  getAll():Observable<Marker[]>{
    return this._http.get<Marker[]>(`${AppSettings.API_ENDPOINT}/marker`);
  }
}
