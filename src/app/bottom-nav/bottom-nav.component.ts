import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemesService } from '../services/themes.service';
import { Title } from "@angular/platform-browser";
import { Location } from '@angular/common';

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
     }
   }
}
