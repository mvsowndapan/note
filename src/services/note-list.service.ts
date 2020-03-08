import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { INotes } from "src/interfaces/notes.interface";

@Injectable({
  providedIn: "root"
})
export class NoteListService {
  public _Url = "../assets/data/notes.json";
  constructor(private http: HttpClient) {}
  getNotes(): Observable<INotes[]> {
    return this.http.get<INotes[]>(this._Url);
  }
}
