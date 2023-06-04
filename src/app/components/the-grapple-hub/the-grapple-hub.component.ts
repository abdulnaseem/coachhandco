import { Component } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { LightGallery } from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';

@Component({
  selector: 'app-the-grapple-hub',
  templateUrl: './the-grapple-hub.component.html',
  styleUrls: ['./the-grapple-hub.component.css']
})
export class TheGrappleHubComponent {

  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

}
