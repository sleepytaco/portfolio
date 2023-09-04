import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  themes: string[] = [];
  currThemeIndex: number = 0;

  constructor() { 
    this.themes = ['retro', 'cyberpunk', 'garden', 'wireframe', 'synthwave', 'pastel'];
    
    // get cached theme index if any
    let themeIndex = Number(localStorage.getItem('themeIndex'));
    if (!themeIndex) {
      themeIndex = 0;
    }

    this.currThemeIndex = themeIndex;
    // document.body.setAttribute('data-theme', this.themes[themeIndex]); // set default theme
  }

  initDefaultTheme() {
    document.body.setAttribute('data-theme', this.themes[this.currThemeIndex]); // set default theme
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
