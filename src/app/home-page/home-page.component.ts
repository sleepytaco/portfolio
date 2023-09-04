import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  themes: string[] = [];
  currThemeIndex: number = 0;

  ngOnInit() {
    this.themes = ['synthwave', 'retro', 'garden', 'cyberpunk',  'pastel', 'wireframe'];
    
    let themeIndex = Number(localStorage.getItem('themeIndex'));
    if (!themeIndex) {
      themeIndex = 0;
    }
    this.currThemeIndex = themeIndex;
    document.body.setAttribute('data-theme', this.themes[themeIndex]); // set default theme

  }

  toggleThemes() {
    this.currThemeIndex = (this.currThemeIndex + 1) % this.themes.length;
    document.body.setAttribute('data-theme', this.themes[this.currThemeIndex]);
    localStorage.setItem('themeIndex', `${this.currThemeIndex}`);
  }

  get getCurrentThemeText() {
    return `Current Theme: ${this.themes[this.currThemeIndex]}`;
  }

}
