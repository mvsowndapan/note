import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StorageServiceModule } from "ngx-webstorage-service";
const AppModules = [BrowserModule, StorageServiceModule]
//components
import { AppComponent } from "./app.component";
import { BottomNavbarComponent } from "../components/bottom-navbar/bottom-navbar.component";
const components = [AppComponent, BottomNavbarComponent];

//routing
import { routingComponents, routingModules } from "./app-routing.module";

//services
import { appServices } from "./app.services";

//matriea ui
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatRippleModule } from '@angular/material/core';

const materialModules = [
  BrowserAnimationsModule,
  MatCardModule,
  MatRippleModule,
  MatGridListModule
];

@NgModule({
  declarations: [...components, ...routingComponents],
  imports: [...AppModules, ...routingModules, ...materialModules],
  providers: [...appServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
