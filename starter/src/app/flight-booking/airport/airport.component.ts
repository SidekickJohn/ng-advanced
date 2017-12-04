import {Component, OnInit} from "@angular/core";
import {AirportService} from "../airport.service";

@Component({
  selector: 'airports',
  templateUrl: './airport.component.html'
})
export class AirportSearchComponent implements OnInit {

  constructor(
    private airportService: AirportService
  ){}

  get airports() {
    return this.airportService.airports
  }

  ngOnInit(): void {
  }

  search(): void {
      this.airportService.load();
  }

}
