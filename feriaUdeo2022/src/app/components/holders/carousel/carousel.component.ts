import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = ['https://i.postimg.cc/tJsB9qXx/under-construction-road-sign-yellow-black-stripes-50808534.jpg','https://i.postimg.cc/tJsB9qXx/under-construction-road-sign-yellow-black-stripes-50808534.jpg','https://i.postimg.cc/tJsB9qXx/under-construction-road-sign-yellow-black-stripes-50808534.jpg'];
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.images);
    
  }

}
