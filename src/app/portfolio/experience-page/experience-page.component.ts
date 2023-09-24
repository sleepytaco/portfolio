import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css']
})
export class ExperiencePageComponent implements OnInit {

  constructor(public dbs: DatabaseService) { 
  }

  ngOnInit() {
    this.dbs.getExperiences();
    // for (let i=0; i<this.experiences.length; i++) {
    //   this.dbs.createExperience(this.experienceNames[i], this.experiences[i]);
    // }
  }

  // type Experience = {
  //   visible: boolean,
  //   priority: number,
  //   ongoing: boolean,
  //   title: string,
  //   company: string,
  //   duration: string,
  //   desc: string[] | string,
  //   skills: string[]
  // };
  // experienceNames: string[] = [
  //   "brownCS1410TA",
  //   "codeucateDjangoBackendDev",
  //   "codepathAndroidTechFellow",
  //   "psuCapstoneProjectSWE",
  //   "psuCMPSCGrader"
  // ];
  // experiences: Experience[] = [
  //   {
  //     "visible": true,
  //     "priority": 0,
  //     "ongoing": true,
  //     "title": "Computer Science Teaching Assistant",
  //     "company": "Brown University",
  //     "duration": "Aug 2023 - Present",
  //     "desc": `
  //       <li>• Teaching assistant for CS1410: Artificial Intelligence (Fall 2023)</li>
  //       <li>• Organized weekly office hours to help students with assignments involving search, hidden Markov models, machine learning, and reinforcement learning.</li>
  //       <li>• Responsible for mentoring students on their final project which involves coding an AI bot to beat a custom grid-based game.</li>`, 
  //     "skills": [
  //       "Python",
  //       "NumPy",
  //       "Machine Learning",
  //       "Reinforcement Learning",
  //       "Teaching",
  //       "Mentoring",
  //       "Time Management"
  //     ],
  //   },
  //   {
  //     "visible": true,
  //     "priority": 1,
  //     "ongoing": false,
  //     "title": "Backend Developer",
  //     "company": "Codeucate.org",
  //     "duration": "Aug 2021 - Aug 2023",
  //     "desc": `
  //     <li>• WeCodeucate.org is a fast-paced non-profit that offers computer science courses geared towards the younger generation.</li>
  //     <li>• Helped develop, refactor and document their student portal that uses Django as the backend.</li>
  //     <li>• Deployed the Django backend on Azure using PostgreSQL as their database.</li>
  //     <li>• Collaborated with front-end developers to integrate user-facing elements with server-side logic, integrated features like instructor onboarding, referral system, certificate generator, and a payments system using the PayPal API.</li>`,
  //     "skills": [
  //       "Python",
  //       "Django",
  //       "JavaScript",
  //       "Integrating APIs",
  //       "Microsoft Azure",
  //       "PostgreSQL",
  //       "Collaboration",
  //       "Time Management",
  //       "Code Refactoring/Documentation",
  //     ],
  //   },
  //   {
  //     "visible": true,
  //     "priority": 2,
  //     "ongoing": false,
  //     "title": "Android Tech Fellow",
  //     "company": "CodePath.org",
  //     "duration": "Jan 2022 - May 2022",
  //     "desc": `
  //       <li>• Responsible for teaching CodePath's Android Development course at Penn State via weekly sessions where the students developed 4 Android apps throughout a span of 10 weeks.</li>
  //       <li>• Mentored and supported a class of 14 students by providing technical support during labs and assignments to ensure they are on track with the pace of the course.</li>
  //       <li>• Brought up student enrollment by marketing the course on-campus by reaching out to several Computer Science and Engineering professors and clubs.</li>`, 
  //     "skills": [
  //       "Java",
  //       "Android Development",
  //       "Communication",
  //       "Teaching",
  //       "Facilitation",
  //       "Classroom Management",
  //     ],
  //   },
  //   {
  //     "visible": true,
  //     "priority": 3,
  //     "ongoing": false,
  //     "title": "Capstone Project Software Engineer",
  //     "company": "Medtronic, Plc",
  //     "duration": "Aug 2021 - Dec 2021",
  //     "desc": `
  //       <li>• Penn State Computer Engineering capstone project sponsored by Medtronic, plc.</li>
  //       <li>• Collaborated with a team of four to build a custom motion capture Android app utilizing the XsensDOT SDK to establish real-time connections with up to three wireless sensors and display live arm angle calculations on the screen.</li>
  //       <li>• Worked closely with Medtronic, plc sponsors to optimize the app's performance, coordinating regular meetings to analyze and troubleshoot the raw data latency issues, resulting in a 50ms reduction in background data collection latency and improving the overall user experience.</li>`, 
  //     "skills": [
  //       "Java",
  //       "Android Development",
  //       "Communication",
  //       "Team Leadership",
  //     ],
  //   },
  //   {
  //     "visible": true,
  //     "priority": 4,
  //     "ongoing": false,
  //     "title": "Computer Science Grader",
  //     "company": "Penn State University - Main Campus",
  //     "duration": "Aug 2021 - Dec 2021",
  //     "desc": `
  //       <li>• Graded assignments covering data structures and algorithmic design for over 300 students.</li>`,
  //     "skills": [
  //       "Algorithms & Data Structures"
  //     ],
  //   },
  // ];
}
