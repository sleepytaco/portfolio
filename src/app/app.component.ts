import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'portfolio';
  themes: string[] = [];
  currThemeIndex: number = 0;

   // bottom navigation step number
  currStepNumber: number = 0;
  maxStepNumber: number = 5;
  
  ngOnInit() {
    this.themes = ['synthwave', 'retro', 'cyberpunk',  'aqua'];
    document.body.setAttribute('data-theme', this.themes[0]); // set default theme
  }
  
  toggleThemes() {
    this.currThemeIndex = (this.currThemeIndex + 1) % this.themes.length;
    document.body.setAttribute('data-theme', this.themes[this.currThemeIndex]);
  }

  get getCurrentThemeText() {
    return `Current Theme: ${this.themes[this.currThemeIndex]}`;
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      console.log(`left arrow pressed - curr step ${this.currStepNumber}`);
      if (this.currStepNumber > 0) {
        this.currStepNumber -= 1;
      }
    } else if (event.key == "ArrowRight") {
      console.log(`right arrow pressed - curr step ${this.currStepNumber}`);
      if (this.currStepNumber < this.maxStepNumber) {
        this.currStepNumber += 1;
      }
    } else if (event.key == "f" || event.key == "F") {
      alert("Respects paid!");
    }
  }
}
