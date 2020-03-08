import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { BottomNavComponent } from "../components/bottom-nav/bottom-nav.component";
import { BottomDrawerComponent } from "../components/bottom-drawer/bottom-drawer.component";
import { MatIconModule } from "@angular/material/icon";

export const materialComponents = [BottomNavComponent, BottomDrawerComponent];

export const materialModules = [
  BrowserAnimationsModule,
  MatBottomSheetModule,
  MatIconModule
];
