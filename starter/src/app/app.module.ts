import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';

import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {BasketComponent} from "./basket/basket.component";
import {SharedModule} from "./shared/shared.module";
import {CustomPreloadingStrategy} from "./shared/preloading/custom-preloading-strategy";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    //FlightBookingModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: CustomPreloadingStrategy})
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent
  ],
  providers: [
    // { provide: FlightService, useClass: FlightService}
    // FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
