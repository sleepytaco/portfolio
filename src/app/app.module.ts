import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MiscPageComponent } from './misc-page/misc-page.component';
import { SharedModule } from './shared/shared.module';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EducationPageComponent,
    ExperiencePageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    MiscPageComponent,
    BottomNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
