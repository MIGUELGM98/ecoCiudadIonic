import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Ideas, Product, Products } from '../models/Products.model';
import { AppSettings } from '../settings/links.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: HttpClient
  ) { }

  getMain():Observable<Products[]>{
    return this._http.get<Products[]>(`${AppSettings.API_ENDPOINT}/products`);
  }

  findById(id):Observable<Product[]>{
    return this._http.get<Product[]>(`${AppSettings.API_ENDPOINT}/products/${id}`);
  }

  findByCat(id):Observable<Category[]>{
    return this._http.get<Category[]>(`${AppSettings.API_ENDPOINT}/products/category/${id}`);
  }

  findByIdea(id):Observable<Ideas[]>{
    return this._http.get<Ideas[]>(`${AppSettings.API_ENDPOINT}/products/ideas/${id}`);
  }
}
