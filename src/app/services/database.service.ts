import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

type Experience = {
  visible: boolean,
  priority: number,
  ongoing: boolean,
  title: string,
  company: string,
  duration: string,
  desc: string[] | string,
  skills: string[]
};

type Project = {
  priority: number,
  visible: boolean,
  title: string,
  subtitle: string,
  desc: string,
  skills: string[],
  imgUrl: string,
  projectUrl: string,
  modalDesc: string
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  experiences: Experience[] = [];
  projects: Project[] = [];
  skills: string[] = [];

  constructor(private db: AngularFirestore) { } 

  async getExperiences() {
    if (this.experiences.length > 0) {
      return;
    }
    console.log("Getting experiences data...");
    await this.db.collection('experiences').ref.orderBy('priority').get().then(
      expSnapshot => expSnapshot.forEach((exp) => {
        let experience: any = exp.data();
        if (experience.visible) {
          let e: Experience = {
            visible: experience.visible,
            priority: experience.priority,
            ongoing: experience.ongoing,
            title: experience.title,
            company: experience.company,
            duration: experience.duration,
            desc: experience.desc,
            skills: experience.skills,
          }
          this.experiences.push(e);
        }
      })
    );
  }

  async getProjects() {
    if (this.projects.length > 0) {
      return;
    }
    console.log("Getting projects data...");
    await this.db.collection('projects').ref.orderBy('priority').get().then(
      projSnapshot => projSnapshot.forEach((p) => {
        let proj: any = p.data();
        if (proj.visible) {
          let pr: Project = {
            priority: proj.priority,
            visible: proj.visible,
            title: proj.title,
            subtitle: proj.subtitle,
            desc: proj.desc,
            skills: proj.skills,
            imgUrl: proj.imgUrl,
            projectUrl: proj.projectUrl,
            modalDesc: proj.modalDesc,
          }
          this.projects.push(pr);
          for (let i=0; i<proj.skills.length; i++) {
            if (this.skills.indexOf(proj.skills[i]) == -1) {
              this.skills.push(proj.skills[i]);
            }
          }
        }
      })
    );
  }

  createProject(projID: any, proj: Project) {
    console.log("creating project");
    return this.db.collection('projects').doc(projID).set({
        priority: proj.priority,
        visible: proj.visible,
        title: proj.title,
        subtitle: proj.subtitle,
        desc: proj.desc,
        skills: proj.skills,
        imgUrl: proj.imgUrl,
        projectUrl: proj.projectUrl,
        modalDesc: proj.modalDesc,
    });
  }

  createExperience(expID: any, experience: Experience) {
    console.log("creating experience");
    return this.db.collection('experiences').doc(expID).set({
        visible: experience.visible,
        priority: experience.priority,
        ongoing: experience.ongoing,
        title: experience.title,
        company: experience.company,
        duration: experience.duration,
        desc: experience.desc,
        skills: experience.skills,
    });
  }
}
