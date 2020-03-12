import { Component, OnInit, Output, Input } from '@angular/core';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {

  public styles = {
    MatCard: {
      padding: "0",
      margin: "0",
      background: "",
      color: ""
    },
    MatGrid: {
      margin: "0",
      padding: "0"
    },
    MatGridTileHeading: {
      fontWeight: "bold",
      fontSize: "x-large"
    },
    MatGridTileIcon: {
      fontSize: "large"
    }
  }

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    let theme = this.themeService.getDefaultTheme();
    this.styles.MatCard.background = theme.NavBackgroundColor;
    this.styles.MatCard.color = theme.NavFontColor;
  }

}
