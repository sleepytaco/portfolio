import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'portfolio';
  themes: string[] = [];
  currThemeIndex: number = 0;
  currStep: number = 0;
  
  ngOnInit() {
    this.themes = ['retro', 'cyberpunk',  'aqua', 'forest'];
    document.body.setAttribute('data-theme', 'retro');
  }
  
  toggleThemes() {
    this.currThemeIndex = (this.currThemeIndex + 1) % this.themes.length;
    document.body.setAttribute('data-theme', this.themes[this.currThemeIndex]);
  }
}
