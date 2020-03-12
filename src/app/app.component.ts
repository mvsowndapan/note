import { Component, ɵɵresolveBody } from "@angular/core";
import { ConnectionService } from 'ng-connection-service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/services/localStorage.service';
import { ThemeService } from 'src/services/theme.service';



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public styles = {
    AppTheme: {
      "width": "100%",
      "height": "100%",
      "background": "",
      "color": "",
    }
  };
  public internetConnection = {
    status: true,
    isConnected: true
  }

  constructor(private localStorageService: LocalStorageService, private themeService: ThemeService, private router: Router, private connectionService: ConnectionService) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.internetConnection.isConnected = isConnected;
      if (this.internetConnection.isConnected) { this.internetConnection.status = true; this.router.navigate(["home"]) }
      else this.internetConnection.status = false;
    })
  }

  ngOnInit() {
    if (!this.localStorageService.hasLocalStorage()) this.localStorageService.setDefaultLocalStorage();
    let defaultTheme = this.themeService.getDefaultTheme();
    this.styles.AppTheme.background = defaultTheme.BackgroundColor;
    this.styles.AppTheme.color = defaultTheme.FontColor;
  }
}
