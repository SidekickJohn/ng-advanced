import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";
import {CanDeactivateGuard} from "./deactivation/can-deactivate.guard";
import {TabComponent} from "./components/tab.component";
import {TabbedPaneComponent} from "./components/tabbed-pane-component/tabbed-pane.component";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    CanDeactivateGuard
  ],
  declarations: [
    CityPipe,
    TabComponent,
    TabbedPaneComponent
  ],
  exports: [
    CityPipe,
    TabComponent,
    TabbedPaneComponent
  ]
})
export class SharedModule { }
