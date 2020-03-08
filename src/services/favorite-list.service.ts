import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { INotes } from "src/interfaces/notes.interface";

@Injectable({ providedIn: "root" })
export class FavoriteListService {
  constructor(private http: HttpClient) {}

  getFavorites(): Observable<INotes[]> {
    return this.http.get<INotes[]>("../assets/data/favorite.json");
  }
}
