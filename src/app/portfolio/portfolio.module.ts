import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MiscPageComponent } from './misc-page/misc-page.component';

import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    EducationPageComponent,
    ExperiencePageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    MiscPageComponent,],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ReactiveFormsModule
  ],
})
export class PortfolioModule { }
