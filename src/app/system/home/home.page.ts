import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public slide: any;

  constructor() {
    this.slide = {
      slidesPerView: 'auto'
    }
  }

  ngOnInit() {
  }

}
