import { Component, OnInit } from '@angular/core';
import { Product, Products } from 'src/app/models/Products.model';
import { Types } from 'src/app/models/Types.model';
import { ProductService } from 'src/app/services/product.service';
import { AppSettings } from '../../settings/links.config';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public slide: any;
  public Types: Array<Types>;
  public Products: Array<Products>;
  public url: any;

  constructor(
    private _productService: ProductService,
    private _typeService: TypesService
  ) {
    this.Types = new Array<Types>();
    this.Products = new Array<Products>();
    this.url = AppSettings.DOMAIN;
    this.slide = {
      slidesPerView: 'auto' 
    }
  }
 
  ngOnInit() {
      //Tab reciclar
      this._typeService.getTypes().subscribe(
        res => {
          this.Types = res;
          console.log(this.Types);
        }
      );
  
      //Tab Común
      this._productService.getMain().subscribe(
        res => {
          this.Products = res;
          console.log(this.Products);
        }
      )
  }

}
