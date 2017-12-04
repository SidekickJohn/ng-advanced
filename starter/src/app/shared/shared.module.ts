import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";
import {CanDeactivateGuard} from "./deactivation/can-deactivate.guard";
import {CustomPreloadingStrategy} from "./preloading/custom-preloading-strategy";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [
    CityPipe
  ],
  exports: [
    CityPipe
  ]
})
export class SharedModule {

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ /*No providers here*/ ]
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
        AuthGuard,
        CanDeactivateGuard,
        CustomPreloadingStrategy
      ]
    }
  }
}
