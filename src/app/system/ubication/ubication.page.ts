import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, Marker, marker } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Icons } from 'src/app/utils/icon.utils';

@Component({
  selector: 'app-ubication',
  templateUrl: './ubication.page.html',
  styleUrls: ['./ubication.page.scss'],
  providers: [ Geolocation ]
})
export class UbicationPage implements OnInit {

  public map: Map;
  public marker: any;
  public lat: number;
  public lon: number;
  public name: string;
  private icon: Icons;

  constructor(
    private geolocation: Geolocation
  ) {
    this.icon = new Icons();
    this.lat = 22.7433;
    this.lon =  -98.9747;
    this.name = 'Alejandro Filiberto';
  }

  ngOnInit() {}

  ionViewDidEnter(){
    this.loadMap();
  }

  loadMap(): void{
    this.map = new Map('map').setView([this.lat, this.lon], 13);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(this.map); // This line is added to add the Tile Layer to our map

    this.markers();
  }

  markers(){
    this.marker = marker([this.lat, this.lon]).addTo(this.map);

    marker([22.7537333, -98.9662367], {
      icon: this.icon.greenIcon
    }).bindPopup('<p class="ion-no-margin">FMODZ</p>').addTo(this.map);

    marker([22.74588, -98.9713898], {
      icon: this.icon.yellowIcon
    }).bindPopup('<p class="ion-no-margin">Papeleria El Contador</p>').addTo(this.map);

    marker([22.7405766,-98.9709651], {
      icon: this.icon.blueIcon
    }).bindPopup('<p class="ion-no-margin">Gorditas Moya</p>').addTo(this.map);

    marker([22.7352116, -98.9724365], {
      icon: this.icon.dangerIcon
    }).bindPopup('<p class="ion-no-margin">Zona en peligro de contaminación</p>').addTo(this.map);
  }

  button(){
    console.log("Test");
  }

}
