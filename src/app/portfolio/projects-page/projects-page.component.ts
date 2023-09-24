import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  constructor(public dbs: DatabaseService) { 
  }

  ngOnInit() {
    this.dbs.getProjects();
    // for (let i=0; i<this.projects.length; i++) {
    //   this.dbs.createProject(this.projectNames[i], this.projects[i]);
    // }
  }

  showModalByID(id: number) {
    document.getElementById(`modal_${id}`)?.classList.add("modal-open");
  }

  hideModalByID(id: number) {
    document.getElementById(`modal_${id}`)?.classList.remove("modal-open");
  }

  // type Project = {
  //   priority: number,
  //   visible: boolean,
  //   title: string,
  //   subtitle: string,
  //   desc: string,
  //   skills: string[],
  //   imgUrl: string,
  //   projectUrl: string,
  //   modalDesc: string
  // };
  // portfolio: Project = {
  //   priority: 0,
  //   visible: true,
  //   title: "Portfolio Website",
  //   subtitle: "Personal Project",
  //   desc: "You're currently viewing it! 🔥",
  //   skills: [
  //     "AngularJS",
  //     "TypeScript",
  //     "Firebase",
  //     "RxJS",
  //     "DaisyUI",
  //     "TailwindCSS",
  //     "ParticlesJS",
  //     "UI/UX Design"
  //   ],
  //   imgUrl: "",
  //   projectUrl: "https://github.com/sleepytaco/sleepytaco.github.io",
  //   modalDesc: `This project is my first time working with a reactive front-end framework. 
  //   I love how structured making projects with AngularJS feels! It reminded me of working with views and templates in Django.
  //    I have a live counter on this site (see the contact page) that is stored as a document in Firestore.
  //     I display the counter value in real time using RxJS. I had fun working with RxJS and wrapping my head around concepts like observables and pipes that help streamline working with async data.
  //      Also, I had a blast designing the UI using DiasyUI. I love to make pleasing and intuitive UIs.`,
  // }
  // untube: Project = {
  //   priority: 1,
  //   visible: true,
  //   title: "UnTube: A YouTube Playlist Manager",
  //   subtitle: "Personal Project",
  //   desc: "A YouTube playlist manager web app that makes it easy to manage playlists via bulk operations that are not directly provided by YouTube.",
  //   skills: [
  //     "Python",
  //     "Django",
  //     "Bootstrap5",
  //     "HTMX.js",
  //     "AJAX",
  //     "YouTube API",
  //     "Charts.js",
  //     "UI/UX Design"
  //   ],
  //   imgUrl: "assets/imgs/UnTube_dashboard.gif",
  //   projectUrl: "https://github.com/sleepytaco/UnTube",
  //   modalDesc: `I built UnTube to help users manage multiple YouTube playlists with ease. Users can log in with their Google account to import their playlists into UnTube. They can perform operations like: bulk delete videos from playlists, address duplicate or unavailable videos, bulk copy/move videos from one playlist to another, and view charts and statistics for playlists. My goal was to create a user-friendly and efficient tool that streamlines the process of managing YouTube playlists. Through building UnTube, I deepened my expertise in web app development, API integration, and user experience design.
  //   `,
  // }
  // christmas3Dscene: Project = {
  //   priority: 2,
  //   visible: true,
  //   title: "3D Indoor Christmas Scene",
  //   subtitle: "Computer Graphics Final Project @ Brown University",
  //   desc: "A 3D indoor christmas scene involving Shadow Mapping, Parallax Mapping for the walls, and Particle Effects for the fireplace.",
  //   skills: [
  //     "C++",
  //     "Qt Framework",
  //     "Computer Graphics",
  //     "Shadow Mapping",
  //     "OpenGL"
  //   ],
  //   imgUrl: "assets/imgs/Brown_CG_Christmas3DScene.png",
  //   projectUrl: "https://github.com/yuki-mohammed-jazeps/CS1230-Final-Project",
  //   modalDesc: `Our team built a chirstmas themed scene for our computer graphics final project. Our team implemented the following features:
  //   Parallax Mapping (Jazeps Medina Tretmanis),
  //   Shadow Mapping (Mohammed Khan),
  //   Particle Effects (Yuki Hayashita)
  //   `,
  // }
  // textureSynthCNN: Project = {
  //   priority: 3,
  //   visible: true,
  //   title: "Texture Synthesis CNN",
  //   subtitle: "Deep Learning Final Project @ Brown University",
  //   desc: "Implemented a purely CNN-based architecture in PyTorch for synthesizing variations of an input texture exemplar from a white noise image.",
  //   skills: [
  //     "Python",
  //     "PyTorch",
  //     "Deep Learning",
  //     "Image Synthesis",
  //     "CNNs"
  //   ],
  //   imgUrl: "assets/imgs/CS1470_TextureSynthCNN_POSTER.png",
  //   projectUrl: "https://github.com/sleepytaco/TextureSynthesisCNN",
  //   modalDesc: `The goal behind the Texture Synthesis model is to generate a variation of a texture input by iteratively sampling patterns from it. In each iteration, the model tries to ensure the generated texture image and the provided texture image are closely correlated. I helped build the model using PyTorch. Setting up the model involved running two instances of a custom VGG19 model in conjunction while keeping track of the feature outputs produced at each layer. Then, these feature outputs are used to calculate the loss and eventually generate a texture output.`,
  // }
  // cppRaytracer: Project = {
  //   priority: 4,
  //   visible: true,
  //   title: "C++ Raytracer",
  //   subtitle: "Computer Graphics Course Project @ Brown University",
  //   desc: "Built a Raytracer in C++ that includes a pipeline for ray-object intersections and supports lighting effects, shadows, recursive reflections, and texture mapping.",
  //   skills: [
  //     "C++",
  //     "Qt Framework",
  //     "OOP",
  //   ],
  //   imgUrl: "assets/imgs/Brown_CG_Raytracer.png",
  //   projectUrl: "",
  //   modalDesc: `Working with C++ always forces me to think in a very object-oriented way. The raytracing algorithm involves setting up objects for the camera, scene, rays, and image textures. 
  //   A scene consists of implicitly defined shapes/objects with unique properties describing their material. Then, for every pixel in the resulting rendered image, the algorithm "shoots" a ray 
  //   through that pixel into the scene and checks for ray-object intersections. If there is an intersection, an RGB color value is calculated using the Phong illumination model. More realistic
  //    renderings were made by adding support for shadows and reflections by recursively tracing a ray into the scene from every object the ray intersects.`,
  // }
  // bleachedCoralCNN: Project = {
  //   priority: 5,
  //   visible: true,
  //   title: "Dolphin Fins Siamese Network & Bleached Coral Classifier",
  //   subtitle: "Computer Vision Final Project @ Brown University",
  //   desc: "Went through the whole ML project life cycle to solve two problems: uniquely identify dolphins based on their fins and classify if a coral is bleached.",
  //   skills: [
  //     "Python",
  //     "TensorFlow",
  //     "Deep Learning",
  //     "Siamese Network",
  //     "CNNs",
  //     "Google Colab",
  //   ],
  //   imgUrl: "assets/imgs/Brown_CV_FinalProjPoster.png",
  //   projectUrl: "",
  //   modalDesc: `The first problem we tried to solve was a multi-class classification problem that involved identifying dolphins by their fins. It turns out that you can uniquely identify a dolphin by tracing its fin - just as you can uniquely identify a human by their thumbprint. One of our teammates had access to an image dataset of dolphin fin images each with their unique identifiers. I helped pre-process the dataset by filtering unwanted images, converting it into a TensorFlow dataset, splitting the dataset into learning, test, and cross-validation sets, and finally doing some data normalization + augmentation before passing it to our models. We experimented with a CNN model and a Siamese Network with various hyperparameters. Our main bottleneck was that our dataset only had about 1,500 usable dolphin fin images. Hence, our model consistently overfitted our dataset and underperformed on the validation set. <br><br> Next, we moved on to a different data set, this time a Coral image dataset from Kaggle. Our task with this new dataset was to classify if a coral was bleached or not. We were able to set up a CNN model that made a classification with 70% accuracy. Our team further experimented with various other ML algorithms like SVMs, random forests, KNNs, and logistic regression to try and fit the Corals dataset and compare their performances.`,
  // };
  // cameraProjAndTriang: Project = {
  //   priority: 6,
  //   visible: true,
  //   title: "Camera Projection & Triangulation in MATLAB",
  //   subtitle: "Computer Vision Project @ Penn State University",
  //   desc: "Used MATLAB to perform camera projection and triangulation using data of a subject performing Tai Chi.",
  //   skills: [
  //     "MATLAB",
  //     "Computer Vision",
  //     "Linear Algebra",
  //   ],
  //   imgUrl: "assets/imgs/PSU_CMPEN454_Skeleton3D.png",
  //   projectUrl: "",
  //   modalDesc: `Used MATLAB to implement forward and inverse camera projection with two camera views using 3D body joints data for a set of motion capture frames of a subject performing Tai Chi exercises, along with triangulation to recover original 3D points from matching projected 2D image points.`,
  // };
  // aniQuote: Project =  {
  //   priority: 7,
  //   visible: true,
  //   title: "Anime Quote Generator",
  //   subtitle: "Personal Project",
  //   desc: "A random anime quote generator with quotes powered by Animechan API.",
  //   skills: [
  //     "Python",
  //     "Django",
  //     "HTMX.js",
  //     "SQLite",
  //     "UI/UX Design"
  //   ],
  //   imgUrl: "assets/imgs/AniQuote_walkthrough.gif",
  //   projectUrl: "https://github.com/sleepytaco/AniQuote",
  //   modalDesc: `A web app to retreive and display random quotes from Animechan API. Stored retrieved quotes in an SQLite database and kept tally of the number
  //   of times that quote has been seen and liked. A list of top 3 most liked quotes is displayed at the bottom.`,
  // };
  // xkcdTextMode: Project = {
  //   priority: 8,
  //   visible: true,
  //   title: "XKCD Text Mode",
  //   subtitle: "Android University Final Project",
  //   desc: "Android app that uses the XKCD API to retrieve and view a comic's transcript and image.",
  //   skills: [
  //     "Java",
  //     "Android Development",
  //     "REST APIs",
  //     "Parse Backend",
  //   ],
  //   imgUrl: "assets/imgs/XKCD_walkthrough.gif",
  //   projectUrl: "https://github.com/sleepytaco/XKCDTextMode",
  //   modalDesc: `This is a XKCD comic viewer that uses the XKCD API to retrieve and view a comic's transcript and image. 
  //   Uses Parse as a backend to store the user's favorite comics and to track the number of unique comics they open.`,
  // };
  // imageManager: Project = {
  //   priority: 9,
  //   visible: true,
  //   title: "Image Manager GUI",
  //   subtitle: "Personal Project",
  //   desc: "A simple python GUI app made with Tkinter which can rename, delete, and move images on Windows.",
  //   skills: [
  //     "Python",
  //     "Tkinter GUI",
  //     "Windows",
  //   ],
  //   imgUrl: "assets/imgs/ImageManagerApp.png",
  //   projectUrl: "https://github.com/sleepytaco/ImageManager",
  //   modalDesc: `A simple GUI application that can view images from a folder and manage them. Made with python3 using tkinter. 
  //   The user can use arrow keys to navigate through the images inside a selected folder. One of the tricky parts of this project was renaming
  //   an image. When performing the rename operation, or even moving an image from one folder to another, I had to make sure
  //   to add a number at the end if an image file with similar name already exists in the same folder or destination folder.
  //   `,
  // };
  // quickGif: Project = {
  //   priority: 10,
  //   visible: true,
  //   title: "Quick GIF Maker",
  //   subtitle: "Personal Project",
  //   desc: "A simple web app made with Django that can create sharable GIFs.",
  //   skills: [
  //     "Python",
  //     "Django",
  //     "Pillow",
  //     "Bootstrap4",
  //     "JQuery",
  //     "AJAX"
  //   ],
  //   imgUrl: "assets/imgs/QuickGifApp.gif",
  //   projectUrl: "https://github.com/sleepytaco/QuickGIF",
  //   modalDesc: `A simple web app made with Django that can create sharable GIFs. Utilizes the Pillow library to create the gifs. Created gifs are stored with a unique identifier which is used to create a sharable link. Implemented the client side with Bootstrap4 and made jQuery AJAX calls to retrieve generated GIF links from the server.
  //   `,
  // };
  // mangaDownloader: Project = {
  //   priority: 11,
  //   visible: true,
  //   title: "Manga Downloader",
  //   subtitle: "Personal Project",
  //   desc: "A script to download manga from mangakakalot.com and manganelo.com using browser automation with selenium.",
  //   skills: [
  //     "Python",
  //     "Web Scraping",
  //     "Browser Automation",
  //     "Selenium",
  //   ],
  //   imgUrl: "https://github.com/sleepytaco/manga_downloader/raw/master/walkthrough.gif?raw=true",
  //   projectUrl: "https://github.com/sleepytaco/manga_downloader",
  //   modalDesc: `Downloads manga using browser automation with selenium. Can download from the following sites: https://mangakakalot.com/, https://manganelo.com/manga/, https://m.manganelo.com.
  //   `,
  // };
  // // nittanyMarket: Project = ;

  // projectNames: string[] = [
  //   "portfolio",
  //   "untube",
  //   "textureSynthCNN",
  //   "bleachedCoralCNN",
  //   "cppRaytracer",
  //   "christmas3Dscene",
  //   "cameraProjAndTriang",
  //   // this.nittanyMarket,
  //   "xkcdTextMode",
  //   "quickGif",
  //   "aniQuote",
  //   "imageManager",
  //   // this.mangaDownloader,
  // ];
  
  // projects: Project[] = [
  //   this.portfolio,
  //   this.untube,
  //   this.textureSynthCNN,
  //   this.bleachedCoralCNN,
  //   this.cppRaytracer,
  //   this.christmas3Dscene,
  //   this.cameraProjAndTriang,
  //   // this.nittanyMarket,
  //   this.xkcdTextMode,
  //   this.quickGif,
  //   this.aniQuote,
  //   this.imageManager,
  //   // this.mangaDownloader,
  // ];

}
