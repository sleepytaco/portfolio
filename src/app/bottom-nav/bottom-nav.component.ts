import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemesService } from '../services/themes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {
   // bottom navigation step number used to highlight relavent button
   currStepNumber: number = 0;
   maxStepNumber: number = 0;

   // links for manual routing when left/right arrows are pressed
   links: string[] = [];

   constructor(private _router: Router, private location: Location, public themesService: ThemesService) { }

   ngOnInit(): void {
      this.links = [ '/education', '/experience', '', '/projects', '/contact', '/misc'];

      // eg. if /misc is visited as the very first link, then move stepNumber to highlight misc button on bottom nav
      this.currStepNumber = this.links.indexOf(this.location.path());

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
     } else if (event.key == "ArrowRight") {
       if (this.currStepNumber < this.maxStepNumber) {
         this.currStepNumber += 1;
       }
       this._router.navigateByUrl(this.links[this.currStepNumber]);
     }
   }
}
