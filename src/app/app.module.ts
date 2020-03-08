import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//components
import { AppComponent } from "./app.component";

//routing
import { routingComponents, routingModules } from "./app-routing.module";

//services
import { appServices } from "./app.services";

//matriea ui
import { materialModules, materialComponents } from "./material.component";

@NgModule({
  declarations: [AppComponent, ...routingComponents, ...materialComponents],
  imports: [BrowserModule, ...routingModules, ...materialModules],
  providers: [...appServices],
  bootstrap: [AppComponent]
})
export class AppModule {}
