import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.page.html',
  styleUrls: ['./bottle.page.scss'],
})
export class BottlePage implements OnInit {

  public informacion: boolean;

  constructor() {
    this.informacion = true;
  }

  ngOnInit() {
  }

  state(value){
    console.log(value);
    this.informacion =  value === 1 ? true : false;
  }

}
