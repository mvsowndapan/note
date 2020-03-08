import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { NoteListComponent } from "../components/note-list/note-list.component";
import { FavoriteListComponent } from "../components/favorite-list/favorite-list.component";
import { PageNotFoundComponent } from "src/components/page-not-found/page-not-found.component";
import { NoteComponent } from "src/components/note/note.component";
import { NoteDataComponent } from "src/components/note-data/note-data.component";

const routes: Routes = [
  { path: "", redirectTo: "/note-list", pathMatch: "full" },
  { path: "note-list", component: NoteListComponent },
  {
    path: "note-list/:id",
    component: NoteComponent,
    children: [{ path: "note-data", component: NoteDataComponent }]
  },
  { path: "favorite-list", component: FavoriteListComponent },
  { path: "favorite-list/:id", component: NoteComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  NoteListComponent,
  FavoriteListComponent,
  PageNotFoundComponent,
  NoteComponent,
  NoteDataComponent
];
export const routingModules = [AppRoutingModule, HttpClientModule];
