import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";


import { PageNotFoundComponent } from "src/components/page-not-found/page-not-found.component";
import { SearchComponent } from '../components/Search/search/search.component';
import { HomeComponent } from '../components/Home/home/home.component';
import { AddNoteComponent } from '../components/AddNote/add-note/add-note.component';
import { SettingsComponent } from '../components/Settings/settings/settings.component';
import { FilterComponent } from '../components/Filter/filter/filter.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "search", component: SearchComponent },
  { path: "addNote", component: AddNoteComponent },
  { path: "home", component: HomeComponent },
  { path: "settings", component: SettingsComponent },
  { path: "filter", component: FilterComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  PageNotFoundComponent, SearchComponent, HomeComponent, AddNoteComponent, SettingsComponent, FilterComponent
];
export const routingModules = [AppRoutingModule, HttpClientModule];
