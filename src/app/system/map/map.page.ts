import { Map, tileLayer, Marker, marker, circle } from 'leaflet';
import { IonBackButtonDelegate, NavController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild(IonBackButtonDelegate, { static: false }) backButton: IonBackButtonDelegate;

  public map: Map;
  public marker: any;

  public location: any;

  constructor(
    public navCtrl: NavController
  ) {
    this.location = {
      lat: 22.7433,
      lon: -98.9747
    } 
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.backButton.onClick = (ev) => {
      this.navCtrl.back();
      this.map.remove();
    }

    this.loadMap();
  }

  loadMap(){
    this.map = new Map('report').setView([this.location.lat, this.location.lon], 14.5);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(this.map); // This line is added to add the Tile Layer to our map

    this.markerOptions();
  }

  markerOptions(){
    this.marker = marker([this.location.lat, this.location.lon], {
      draggable: true
    }).addTo(this.map);
  }

}
 