import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { OurMottoComponent } from './components/about/our-motto/our-motto.component';
import { CoreValuesComponent } from './components/about/core-values/core-values.component';
import { FounderComponent } from './components/founder/founder.component';
import { BrawlersBoxingComponent } from './components/brawlers-boxing/brawlers-boxing.component';
import { TheGrappleHubComponent } from './components/the-grapple-hub/the-grapple-hub.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    AboutComponent,
    OurMottoComponent,
    CoreValuesComponent,
    FounderComponent,
    BrawlersBoxingComponent,
    TheGrappleHubComponent,
    ServicesComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LightgalleryModule,
    NgbCarouselModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
