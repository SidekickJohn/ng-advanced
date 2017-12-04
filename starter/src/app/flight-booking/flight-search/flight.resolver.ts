import {Injectable} from "@angular/core";
import {Flight} from "../../entities/flight";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {FlightService} from "./flight.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FlightResolver implements Resolve<Flight> {
  constructor(private flightService: FlightService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight> {
    let id = route.params['id'];
    return this.flightService.findById(id);
  }
}
