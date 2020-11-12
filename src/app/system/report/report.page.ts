import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { MapComponent } from 'src/app/components/map/map.component';
import { Utils } from 'src/app/utils/ionic.utils';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  public show: boolean;
  public form: FormGroup;

  private util: Utils;
  private latLng: {};

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private fb: FormBuilder
  ) {
    this.util = new Utils(new LoadingController, new ToastController, this.modalCtrl);
    this.show = false;
    this.latLng = {
      lat: 0,
      lon: 0
    }
    this.form = this.fb.group({
      tipo_id: ['', [ Validators.required ]]
    })
  }
 
  ngOnInit() {
  }

  openModal(){
    this.util.presentModal(MapComponent, 4, (res) => {
      if(res){
        this.show = true;
        console.log(res.data[0]);
        // this.latLng.lat = res.data[0];
        // this.form.value.lon = res.data[1];
      }else{
        this.show = false;
      }
    });
  }

  generate(){
    console.log(this.form.value);
    // this.util.presentLoading();
    // setTimeout(() => {
    //   this.util.stopLoading();
    //   this.util.presentToast();
    //   this.navCtrl.back();
    // }, 1000);
  }

}
