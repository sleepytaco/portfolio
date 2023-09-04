import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../services/themes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(public themesService: ThemesService) {}
  ngOnInit(): void {
    this.themesService.initDefaultTheme();
  }
}
