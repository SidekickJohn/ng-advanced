import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import {AirportSearchComponent} from "./airport/airport.component";
import {FlightBookingComponent} from "./flight-booking.component";
import {AuthGuard} from "../shared/auth/auth.guard";
import {CanDeactivateGuard} from "../shared/deactivation/can-deactivate.guard";
import {FlightResolver} from "./flight-search/flight.resolver";

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: 'flight-booking',
    component: FlightBookingComponent,
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'airport-search',
        component: AirportSearchComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent,
        canDeactivate: [CanDeactivateGuard],
        resolve: {
          flight: FlightResolver
        }
      }
    ]
  }
];

