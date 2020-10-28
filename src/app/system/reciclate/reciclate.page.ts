import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reciclate',
  templateUrl: './reciclate.page.html',
  styleUrls: ['./reciclate.page.scss'],
})
export class ReciclatePage implements OnInit {

  public slide: any;

  constructor() {
    this.slide = {
      slidesPerView: 'auto'
    }
  }

  ngOnInit() {
  }

}
