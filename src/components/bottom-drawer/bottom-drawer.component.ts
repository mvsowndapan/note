import { Component, OnInit } from "@angular/core";
import {
  MatBottomSheet,
  MatBottomSheetRef
} from "@angular/material/bottom-sheet";
import { BottomNavComponent } from "../bottom-nav/bottom-nav.component";

@Component({
  selector: "app-bottom-drawer",
  templateUrl: "./bottom-drawer.component.html",
  styleUrls: ["./bottom-drawer.component.css"]
})
export class BottomDrawerComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomNavComponent);
  }
}
