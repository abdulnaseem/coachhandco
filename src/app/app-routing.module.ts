import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BrawlersBoxingComponent } from './components/brawlers-boxing/brawlers-boxing.component';
import { FounderComponent } from './components/founder/founder.component';
import { HomeComponent } from './components/home/home.component';
import { TheGrappleHubComponent } from './components/the-grapple-hub/the-grapple-hub.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'founder',
    component: FounderComponent
  },
  {
    path: 'brawlers-boxing',
    component: BrawlersBoxingComponent
  },
  {
    path: 'the-grapple-hub',
    component: TheGrappleHubComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
