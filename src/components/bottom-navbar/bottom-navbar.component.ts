import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { ThemeService } from 'src/services/theme.service';



@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css']
})
export class BottomNavbarComponent implements OnInit {

  public styles = {
    MatCard: {
      margin: "0",
      bottom: "0",
      padding: "0",
      paddingLeft: "0",
      width: "100%",
      borderRadius: "0",
      position: "fixed",
      backgroundColor: "",
      color: ""
    },
    MatGrid: {
      margin: "0"
    },
    MatGridTile: {
      fontWeight: "bold",
      fontSize: "20px"
    },
    MatGridTileRipple: {
      centered: true,
      unbounded: false,
      color: "",
      selectedColor: ""
    },
    MatTileSelected: {
      color: ""
    }
  }

  public selectedNavItem = 3;
  public navItems = [
    { id: 1, url: "/search", icon: "fas fa-search" },
    { id: 2, url: "/addNote", icon: "fas fa-sticky-note" },
    { id: 3, url: "/home", icon: "fas fa-dot-circle" },
    { id: 4, url: "/settings", icon: "fas fa-cog" },
    { id: 5, url: "/filter", icon: "fas fa-sort" }
  ]

  constructor(private router: Router, private themeService: ThemeService) { }
  ngOnInit() {
    let theme = this.themeService.getDefaultTheme();
    this.styles.MatCard.backgroundColor = theme.NavBackgroundColor;
    this.styles.MatCard.color = theme.NavFontColor;
    this.styles.MatGridTileRipple.color = theme.NavTileRipple;
    this.styles.MatTileSelected.color = theme.NavSelectedColor;
  }

  checkSelected(id) {
    return this.selectedNavItem === id;
  }
  navigateTo(item) {
    this.selectedNavItem = item.id;
    this.router.navigate([item.url])
  }
}
