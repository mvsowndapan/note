import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {

  }
}
