import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemesService } from '../services/themes.service';
import { Title } from "@angular/platform-browser";
import { Location } from '@angular/common';

declare function confetti(obj: any): void;

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {
   // bottom navigation step number used to highlight relavent button
   currStepNumber: number;
   maxStepNumber: number;

   // links for manual routing when left/right arrows are pressed
   links: string[];
   pageTitles: string[];

   constructor(private _router: Router, private location: Location, private titleService:Title, public themesService: ThemesService) { }

   ngOnInit(): void {
      this.links = [ '/education', '/experience', '', '/projects', '/contact']; //, '/misc'];
      this.pageTitles = [ "MohammedK's Education", "MohammedK's Experience", 
      "MohammedK's Portfolio", "MohammedK's Projects", "MohammedK's Contact"]; // , "Misc"];

      // eg. if /misc is visited as the very first link, then move stepNumber to highlight misc button on bottom nav
      let linkIndex = this.links.indexOf(this.location.path());
      this.currStepNumber = (linkIndex == -1) ? 2 : linkIndex; // default to center tab if link not found
      this.titleService.setTitle(this.pageTitles[this.currStepNumber]);

      this.maxStepNumber = this.links.length - 1;
      this.themesService.initDefaultTheme();
   }

   @HostListener('window:keyup', ['$event'])
   handleKeyboardEvent(event: KeyboardEvent) {
     if (event.key === "ArrowLeft") {
       if (this.currStepNumber > 0) {
         this.currStepNumber -= 1;
       }
       this._router.navigateByUrl(this.links[this.currStepNumber]);
       this.titleService.setTitle(this.pageTitles[this.currStepNumber]);
     } else if (event.key == "ArrowRight") {
       if (this.currStepNumber < this.maxStepNumber) {
         this.currStepNumber += 1;
       }
       this._router.navigateByUrl(this.links[this.currStepNumber]);
       this.titleService.setTitle(this.pageTitles[this.currStepNumber]);
     } else if (this.currStepNumber != 4 && (event.key == "F" || event.key == "f")) { // don't blast confetti on contact page
        const duration = 7 * 1000,
          animationEnd = Date.now() + duration,
          defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => {
          return Math.random() * (max - min) + min;
        }

        const interval: any = setInterval(function() {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 50 * (timeLeft / duration);

          // since particles fall down, start a bit higher than random
          confetti(
            Object.assign({}, defaults, {
              particleCount,
              origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
          );
          confetti(
            Object.assign({}, defaults, {
              particleCount,
              origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
          );
        }, 250);
     }
   }
}
