import { Component, OnInit } from "@angular/core";
import { FavoriteListService } from "src/services/favorite-list.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
@Component({
  selector: "app-favorite-list",
  templateUrl: "./favorite-list.component.html",
  styleUrls: ["./favorite-list.component.css"]
})
export class FavoriteListComponent implements OnInit {
  public favorites;
  public selectedId;
  constructor(
    private _favoriteListService: FavoriteListService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get("id"));
    });
    this._favoriteListService
      .getFavorites()
      .subscribe(favorites => (this.favorites = favorites));
  }
  onSelectNote(favorite) {
    this.router.navigate(["favorite-list", favorite.id]);
  }
  selected(id) {
    return {
      noteActive: this.selectedId === id,
      noteUnActive: !(this.selectedId === id),
      note: true
    };
  }
}
