import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FlightBookingModule} from './flight-booking/flight-booking.module';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {BasketComponent} from "./basket/basket.component";
import {SharedModule} from "./shared/shared.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function createLoader(http: HttpClient) {
  return new TranslateHttpLoader (http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightBookingModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createLoader,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(APP_ROUTES)
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
