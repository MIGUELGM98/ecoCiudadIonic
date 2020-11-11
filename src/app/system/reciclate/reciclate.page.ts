import { Component, OnInit } from "@angular/core";
import { Products } from "src/app/models/Products.model";
import { ProductService } from "src/app/services/product.service";
import { AppSettings } from "src/app/settings/links.config";

@Component({
  selector: "app-reciclate",
  templateUrl: "./reciclate.page.html",
  styleUrls: ["./reciclate.page.scss"],
})
export class ReciclatePage implements OnInit {
  public Products: Array<Products>;
  public url: any;
  public slide: any;

  constructor(private _productService: ProductService) {
    this.slide = {
      slidesPerView: "auto",
    };
    this.Products = new Array<Products>();
    this.url = AppSettings.DOMAIN;
  }

  ngOnInit() {
    this._productService.getMain().subscribe((res) => {
      this.Products = res;
      console.log(this.Products);
    });
  }
}
