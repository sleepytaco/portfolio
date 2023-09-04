import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {
   // bottom navigation step number
   currStepNumber: number = 0;
   maxStepNumber: number = 0;
   links: string[] = [];

   constructor(private _router: Router) { }

   ngOnInit(): void {
      this.links = ['/hello', '/education', '/experience', '/projects', '/contact', '/misc'];
      this._router.navigateByUrl(this.links[this.currStepNumber]);
      this.maxStepNumber = this.links.length;
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
