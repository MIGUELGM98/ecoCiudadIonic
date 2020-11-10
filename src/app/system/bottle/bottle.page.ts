import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Can } from 'src/app/models/Can.model';
import { Category, Ideas } from 'src/app/models/Products.model';
import { CanService } from 'src/app/services/can.service';
import { ProductService } from 'src/app/services/product.service';
import { AppSettings } from 'src/app/settings/links.config';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.page.html',
  styleUrls: ['./bottle.page.scss'],
})
export class BottlePage implements OnInit {

  public Category: Array<Category>;
  public informacion: boolean;
  public content: number;
  public url: any;
  public Can: Can;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private _canService: CanService,
    private _productService: ProductService
  ) {
    this.content = this.activatedRoute.snapshot.params.id;
    this.Category = new Array<Category>();
    this.informacion = true;
    this.url = AppSettings.DOMAIN;
  }

  ngOnInit() {

    //Can
    this._canService.findById(this.content).subscribe(
        res => {
          this.Can = res[0];
          console.log(this.Can);
        }
    );

    //Products
    this._productService.findByCat(this.content).subscribe(
      res => {
        this.Category = res;
        console.log(res);  
      }
    );
  } 

  state(value){
    console.log(value);
    this.informacion =  value === 1 ? true : false;
  }

}
