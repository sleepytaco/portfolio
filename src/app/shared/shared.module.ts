import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components = [];
const modules = [CommonModule]; // for listing anyc common modules like UI library modules etc.

@NgModule({
  declarations: [
    //...components
  ],
  imports: [
    ...modules
  ],
  exports: [  // ensure other features are able to access
    //...components, 
    ...modules
  ]
})
export class SharedModule { }
