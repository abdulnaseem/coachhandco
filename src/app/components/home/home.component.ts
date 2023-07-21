import { Component } from '@angular/core';
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgIf } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = 'Angular';
  isActive = 1;

  next() {
    if (this.isActive == 3) this.isActive = 0;
    this.isActive ++;
  }
  pre() {
    this.isActive --;
    if (this.isActive == 0) this.isActive = 3;
  }
}
