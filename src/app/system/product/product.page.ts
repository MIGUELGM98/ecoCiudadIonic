import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";
import { MapComponent } from 'src/app/components/map/map.component';
import { Ideas, Product } from "src/app/models/Products.model";
import { ProductService } from "src/app/services/product.service";
import { Utils } from 'src/app/utils/ionic.utils';
import { AppSettings } from "../../settings/links.config";

@Component({
  selector: "app-product",
  templateUrl: "./product.page.html",
  styleUrls: ["./product.page.scss"],
})
export class ProductPage implements OnInit {

  public informacion: boolean;
  public Ideas: Array<Ideas>;
  public Product: Product;
  public url: any;
  public id: any;

  private Util_: Utils;

  constructor(
    private _productService: ProductService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {
    this.Util_ = new Utils(null, null, this.modalCtrl);
    this.id = this.route.snapshot.params.id;
    this.Ideas = new Array<Ideas>();
    this.url = AppSettings.DOMAIN;
    this.informacion = true;
  }

  ngOnInit() {
    //oneProduct
    this._productService.findById(this.id).subscribe((res) => {
      this.Product = res[0];
      console.log(this.Product);
    });

    //Ideas
    this._productService.findByIdea(this.id).subscribe((res) => {
      this.Ideas = res;
      console.log(this.Ideas);
    });
  } 

  state(value) {
    console.log(value);
    this.informacion = value === 1 ? true : false;
  }

  openMap(){
    this.Util_.presentModal(MapComponent, this.Product.Tipo_id);
  }

  openVideo() {
    window.open("https://www.youtube.com/watch?v=1skPkyiln2s");
  }
}
