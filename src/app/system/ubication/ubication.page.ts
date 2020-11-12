import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker, circle } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Icons } from 'src/app/utils/icon.utils';
import { LoadingController, NavController, PopoverController } from '@ionic/angular';
import { InformationComponent } from 'src/app/components/information/information.component';
import { MarkerService } from 'src/app/services/marker.service';
import { Marker } from 'src/app/models/Marker.model';
import { Utils } from 'src/app/utils/ionic.utils';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-ubication',
  templateUrl: './ubication.page.html',
  styleUrls: ['./ubication.page.scss'],
  providers: [ Geolocation ]
})
export class UbicationPage{

  public Marker: Array<Marker>;
  public Zone: Array<Marker>;
  public map: Map;
  public marker: any;
  public name: string;
  private icon: Icons;

  constructor(
    private _markerService: MarkerService,
    private _mapService: MapService,
    public popOverCtrl: PopoverController,
    public navCtrl: NavController,
  ) {
    this.Marker = new Array<Marker>();
    this.Zone = new Array<Marker>();
    this.icon = new Icons();
    this.name = 'Alejandro Filiberto';
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
    this.map = new Map('map').setView([ this._mapService.lat_, this._mapService.lon_ ], 14.5);
    tileLayer(this._mapService.theme_).addTo(this.map);
  } 

  markers(){
    this.marker = marker([this._mapService.lat_, this._mapService.lon_]).addTo(this.map);
    this.Marker.filter(res => {

    let popUp = `<p class="ion-no-margin">${res.nombre}</p>`;
    let icon = {
      icon: res.id_bote == 1 ? this.icon.yellowIcon : res.id_bote == 2 ? this.icon.blueIcon : this.icon.greenIcon
    };

      marker([res.lat, res.lng], icon).bindPopup(popUp).addTo(this.map);
    });
  }

  circles(){
    this.Zone.filter(res => {
      let name: string;
      let color = res.id_zona == 2 ? this._mapService.red_ : this._mapService.orange_; 
      let data: any = { icon: res.id_zona === 2 ? this.icon.dangerIcon : this.icon.dangerMediumIcon };

      name = `<p class="ion-no-margin">${res.nombre}</p>`;

      marker([res.lat, res.lng], data).bindPopup(name).addTo(this.map);
      circle([res.lat, res.lng], color).addTo(this.map);
    });
  }

  move(){
    this.navCtrl.navigateForward('/report');
  }

  //Cambiar a utils
  async information(){
    const popover = await this.popOverCtrl.create({
      component: InformationComponent,
      cssClass: 'information',
      translucent: true
    });
    return await popover.present();
  }

}
