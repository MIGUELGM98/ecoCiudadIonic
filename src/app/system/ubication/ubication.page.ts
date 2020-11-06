import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, Marker, marker, circle } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Icons } from 'src/app/utils/icon.utils';
import { NavController, PopoverController } from '@ionic/angular';
import { InformationComponent } from 'src/app/components/information/information.component';

@Component({
  selector: 'app-ubication',
  templateUrl: './ubication.page.html',
  styleUrls: ['./ubication.page.scss'],
  providers: [ Geolocation ]
})
export class UbicationPage implements OnInit {

  //Map
  public map: Map;
  public marker: any;

  //Options 
  public lat: number;
  public lon: number;
  public name: string;

  //utils
  private icon: Icons;
  private red: any;
  private orange: any;

  constructor(
    private geolocation: Geolocation,
    public popOverCtrl: PopoverController,
    public navCtrl: NavController
  ) {
    this.icon = new Icons();
    this.lat = 22.7433;
    this.lon =  -98.9747;
    this.name = 'Alejandro Filiberto';
    this.red = {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 150
    }

    this.orange = {
      color: 'orange',
      fillColor: 'orange',
      fillOpacity: 0.5,
      radius: 150
    }
  }

  ngOnInit() {}

  ionViewDidEnter(){
    if(!this.map){
      this.loadMap();
    }
  }

  loadMap(): void{
    this.map = new Map('map').setView([this.lat, this.lon], 14.5);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(this.map); // This line is added to add the Tile Layer to our map

    this.markers();
    this.circles();
  }

  markers(){
    this.marker = marker([this.lat, this.lon]).addTo(this.map);

    //Green
    marker([22.7537333, -98.9662367], {
      icon: this.icon.greenIcon
    }).bindPopup('<p class="ion-no-margin">FMODZ</p>').addTo(this.map);
    marker([22.738744, -98.965539], {
      icon: this.icon.greenIcon
    }).bindPopup('<p class="ion-no-margin">FMODZ</p>').addTo(this.map);

    //Yellow
    marker([22.74588, -98.9713898], {
      icon: this.icon.yellowIcon
    }).bindPopup('<p class="ion-no-margin">Papeleria El Contador</p>').addTo(this.map);
    marker([22.733678, -98.968715], {
      icon: this.icon.yellowIcon
    }).bindPopup('<p class="ion-no-margin">Papeleria El Contador</p>').addTo(this.map);

    //Blue
    marker([22.7405766,-98.9709651], {
      icon: this.icon.blueIcon
    }).bindPopup('<p class="ion-no-margin">Gorditas Moya</p>').addTo(this.map);
    marker([22.752319, -98.973799], {
      icon: this.icon.blueIcon
    }).bindPopup('<p class="ion-no-margin">Gorditas Moya</p>').addTo(this.map);

    //Danger
    marker([22.7352116, -98.9724365], {
      icon: this.icon.dangerIcon
    }).bindPopup('<p class="ion-no-margin">Zona en contaminación</p>').addTo(this.map);
    marker([22.764706, -98.972423], {
      icon: this.icon.dangerIcon
    }).bindPopup('<p class="ion-no-margin">Zona en contaminación</p>').addTo(this.map);

    //Medium
    marker([22.748797, -98.964935], {
      icon: this.icon.dangerMediumIcon
    }).bindPopup('<p class="ion-no-margin">Zona en peligro de contaminación</p>').addTo(this.map);
    marker([22.746581, -98.987797], {
      icon: this.icon.dangerMediumIcon
    }).bindPopup('<p class="ion-no-margin">Zona en peligro de contaminación</p>').addTo(this.map);
  }

  circles(){
    //RED
    circle([22.7352116, -98.9724365], this.red).addTo(this.map);
    circle([22.764706, -98.972423], this.red).addTo(this.map);

    //Orange
    circle([22.748797, -98.964935], this.orange).addTo(this.map);
    circle([22.746581, -98.987797], this.orange).addTo(this.map);
  }

  button(){
    console.log("Test");
  }

  move(){
    this.navCtrl.navigateForward('/report');
    // this.map.remove();
  }

  async information(){
    const popover = await this.popOverCtrl.create({
      component: InformationComponent,
      cssClass: 'information',
      translucent: true
    });
    return await popover.present();
  }

}
