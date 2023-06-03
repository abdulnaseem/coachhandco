import { Component } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { LightGallery } from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';


interface Item {
  imageSrc: string,
  imageAlt: string
}

@Component({
  selector: 'app-brawlers-boxing',
  templateUrl: './brawlers-boxing.component.html',
  styleUrls: ['./brawlers-boxing.component.css']
})
export class BrawlersBoxingComponent {

  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

}
