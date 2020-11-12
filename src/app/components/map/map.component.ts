import { Component, Input, OnInit } from '@angular/core';
import { Map, tileLayer, marker, circle} from 'leaflet';
import { Icons } from 'src/app/utils/icon.utils';
import { ModalController } from '@ionic/angular';
import { MapService } from 'src/app/services/map.service';
import { MarkerService } from 'src/app/services/marker.service';
import { Marker } from 'src/app/models/Marker.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @Input() id: number;

  public Markers : Array<Marker>;
  public title: string;
  public map: Map;
  public marker: any;

  private Icons: Icons;

  constructor(
    private modalCtrl: ModalController,
    private _mapService: MapService,
    private _markerService: MarkerService
  ) {
    this.Markers = new Array<Marker>();
    this.Icons = new Icons();
  }
  
  ngOnInit() {
    this.title = this.id === 4 ? 'Reporte' : this.id === 1 ? 'Bote Amarillo' : this.id === 2 ? 'Bote Azul' : 'Bote Verde';
  }

  acceptModal(){
    this.modalCtrl.dismiss({
      data: [ this.marker._latlng.lat, this.marker._latlng.lng ]
    });
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  loadMap(){
    this.map = new Map('modal').setView([ this._mapService.lat_, this._mapService.lon_ ], 14.5);
    tileLayer(this._mapService.theme_).addTo(this.map);
    
    let options = {
      draggable : this.id == 4 ? true : false
    }
    this.marker = marker([this._mapService.lat_, this._mapService.lon_], options).addTo(this.map);
    
    if(this.id != 4){
      this.getPoints();
    }
  }

  getPoints(){
    this._markerService.getById(this.id).subscribe(
      res => {
        this.fillPoints(res);
      },
      err => {
        this.modalCtrl.dismiss();
      }
    )
  }

  fillPoints(data){
    this.Markers = data;
    this.Markers.filter(
      res => {
        marker([res.lat, res.lng], {
          icon: res.id_bote === 1 ? this.Icons.yellowIcon : res.id_bote === 2 ? this.Icons.blueIcon : this.Icons.greenIcon
        }).addTo(this.map);
      }
    )
  }

  ionViewDidEnter(){
    this.loadMap();
  }

}
