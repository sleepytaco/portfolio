import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MiscPageComponent } from './misc-page/misc-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { EducationPageComponent } from './education-page/education-page.component';

const routes: Routes = [
  { path: 'hello', component: HomePageComponent },
  { path: 'education', component: EducationPageComponent },
  { path: 'experience', component: ExperiencePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'misc', component: MiscPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
