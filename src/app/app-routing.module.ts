import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";


import { PageNotFoundComponent } from "src/components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  PageNotFoundComponent,
];
export const routingModules = [AppRoutingModule, HttpClientModule];
