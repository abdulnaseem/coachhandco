import { Component } from '@angular/core';
const AOS = require('aos');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = 'Angular';

  ngOnInit() {
    AOS.init();
  }
}
