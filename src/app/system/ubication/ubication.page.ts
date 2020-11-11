import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker, circle } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Icons } from 'src/app/utils/icon.utils';
import { LoadingController, NavController, PopoverController } from '@ionic/angular';
import { InformationComponent } from 'src/app/components/information/information.component';
import { MarkerService } from 'src/app/services/marker.service';
import { Marker } from 'src/app/models/Marker.model';
import { Utils } from 'src/app/utils/ionic.utils';

@Component({
  selector: 'app-ubication',
  templateUrl: './ubication.page.html',
  styleUrls: ['./ubication.page.scss'],
  providers: [ Geolocation ]
})
export class UbicationPage{

  //Models
  public Marker: Array<Marker>;
  public Zone: Array<Marker>;

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
    public popOverCtrl: PopoverController,
    public navCtrl: NavController,
    private _markerService: MarkerService,
  ) {
    this.Marker = new Array<Marker>();
    this.Zone = new Array<Marker>();
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

  ionViewDidEnter(){

    if(!this.map){
      
      this.loadMap();

      this._markerService.getAll().subscribe(
        res => {
          this.Marker = res;
          this.markers();
        }
      );

      this._markerService.getZone().subscribe(
        res => {
          this.Zone = res;
          this.circles();
          console.log(this.Zone);
        }
      )

    }
  }

  loadMap(): void{

    //Map Configuration
    let attr = {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }

    this.map = new Map('map').setView([this.lat, this.lon], 14.5);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attr).addTo(this.map);

  }

  markers(){

    this.marker = marker([this.lat, this.lon]).addTo(this.map);
    this.Marker.filter(res => {

      let popUp = `<p class="ion-no-margin">${res.nombre}</p>`;
      let icon = { icon: null };

      if(res.id_bote == 1){
        icon.icon = this.icon.yellowIcon
      }else if(res.id_bote == 2){
        icon.icon = this.icon.blueIcon
      }else{
        icon.icon = this.icon.greenIcon
      }

      marker([res.lat, res.lng], icon).bindPopup(popUp).addTo(this.map);
    });
  }

  circles(){
    
    this.Zone.filter(res => {

      let name: string;
      let color = res.id_zona == 2 ? this.red : this.orange; 
      let data: any = { icon: res.id_zona === 2 ? this.icon.dangerIcon : this.icon.dangerMediumIcon };

      name = `<p class="ion-no-margin">${res.nombre}</p>`;

      marker([res.lat, res.lng], data).bindPopup(name).addTo(this.map);
      circle([res.lat, res.lng], color).addTo(this.map);
    });
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
