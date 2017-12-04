import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AirportService {

  constructor(private http: HttpClient) {
  }
  public airports: string[] = [];

  load(): void {
    this.findAirports().subscribe(
      airports => {
        this.airports = airports;
      },
      err => console.error('Error loading airports', err)
    );
  }


  findAirports(): Observable<string[]> {
    let url = 'http://www.angular.at/api/airport';

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<string[]>(url, {headers});
  }
}
