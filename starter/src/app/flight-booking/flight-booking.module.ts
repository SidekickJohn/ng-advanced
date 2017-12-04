import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService } from './flight-search/flight.service';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import {AirportService} from "./airport.service";
import {AirportSearchComponent} from "./airport/airport.component";
import {FlightBookingComponent} from "./flight-booking.component";
import {FlightResolver} from "./flight-search/flight.resolver";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forChild(),
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent,
    AirportSearchComponent,
    FlightBookingComponent
  ],
  providers: [
    FlightService,
    AirportService,
    FlightResolver
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
