import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public attribution_: string;
  public theme_: string;
  public lat_: number;
  public lon_: number;
  public orange_: {};
  public red_: {};

  constructor() {
    this.attribution_ = 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';
    this.theme_ = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    this.lat_ = 22.7433;
    this.lon_ =  -98.9747;
    this.orange_ = {
      color: 'orange',
      fillColor: 'orange',
      fillOpacity: 0.5,
      radius: 150,
    }
    this.red_ = {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 150,
    }
  }

  //Sets
  set lat(lat){ this.lat_ = lat; }
  set lon(lon){ this.lon_ = lon; }

  //Gets
  get lat(){ return this.lat_; }
  get lon(){ return this.lon_; }


}
