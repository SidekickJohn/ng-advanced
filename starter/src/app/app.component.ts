import { Component, OnInit } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  showLoadingIndicator: boolean = false;

  constructor(private router: Router, private translateService: TranslateService) {
    // router.events
    //   .filter( e => e instanceof NavigationStart)
    //   .subscribe(event => {
    //     this.showLoadingIndicator = true;
    // });
    //
    // router.events
    //   .filter( e => e instanceof NavigationEnd
    //             || e instanceof NavigationError
    //             || e instanceof NavigationCancel)
    //   .subscribe(event => {
    //     this.showLoadingIndicator = false;
    //   });

    this.translateService.addLangs(['en', 'de']);
    this.translateService.setDefaultLang('de');
    this.translateService.use('de');
  }

}

