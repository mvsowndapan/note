import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"



@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css']
})
export class BottomNavbarComponent implements OnInit {

  public styles = {
    BottomNavCardStyles: {
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
    BottomNavGrid: {
      margin: "0"
    },
    BottomNavTile: {
      fontSize: "large"
    }
  }
  public centered = true;
  public unbounded = false;
  public selectedNavItem = 1;
  public navItems = [
    { id: 1, url: "/home", icon: "fas fa-search" },
    { id: 2, url: "/addNote", icon: "fas fa-at" },
    { id: 3, url: "/settings", icon: "fas fa-cog" },
    { id: 4, url: "/profile", icon: "fas fa-user" }
  ]

  constructor(private router: Router) { }
  ngOnInit() {
  }

  checkSelected(id) {
    return this.selectedNavItem === id;
  }
  navigateTo(item) {
    this.selectedNavItem = item.id;
    this.router.navigate([item.url])
  }
}
