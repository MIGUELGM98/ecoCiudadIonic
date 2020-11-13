import { Component, OnInit } from "@angular/core";
import { Products } from "src/app/models/Products.model";
import { Types } from 'src/app/models/Types.model';
import { ProductService } from "src/app/services/product.service";
import { TypesService } from 'src/app/services/types.service';
import { AppSettings } from "src/app/settings/links.config";

@Component({
  selector: "app-reciclate",
  templateUrl: "./reciclate.page.html",
  styleUrls: ["./reciclate.page.scss"],
})
export class ReciclatePage implements OnInit {

  public Products: Array<Products>;
  public TypesCopy: Array<Types>;
  public Types: Array<Types>;
  public id: number;
  public url: any;
  public slide: any;

  constructor(
    private _productService: ProductService,
    private _typeService: TypesService
    ) {
    this.slide = {
      slidesPerView: "auto",
    };
    this.id = 0;
    this.Types = new Array<Types>();
    this.Products = new Array<Products>();
    this.url = AppSettings.DOMAIN;
  }

  ngOnInit() {
    this._productService.getMain().subscribe((res) => {
      this.Products = res;
      console.log(this.Products);
    });
    
    this._typeService.getTypes().subscribe(
      res => {
        this.TypesCopy = res;
        this.Types = res;
        console.log(this.Types);
      }
    )
  }

  active(id){
    console.log(id);
    this.id = id;
  }
  
}
