import { Component, ɵɵresolveBody } from "@angular/core";
import { ThemeService } from 'src/services/theme.service';
import { Router } from '@angular/router';



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
  constructor(private themeService: ThemeService, private router: Router) { }
  ngOnInit() {
    if (!this.themeService.hasDefaultTheme()) this.themeService.setDefaultTheme();
    let defaultTheme = this.themeService.getDefaultTheme();
    this.styles.AppTheme.background = defaultTheme.BackgroundColor;
    this.styles.AppTheme.color = defaultTheme.FontColor;
  }
}
