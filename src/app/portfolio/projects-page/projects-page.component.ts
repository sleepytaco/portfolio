import { Component } from '@angular/core';


type Project = {
  title: string,
  subtitle: string,
  desc: string,
  skills: string[],
  imgUrl: string,
  projectUrl: string,
  modalDesc: string
};

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
  portfolio: Project = {
    title: "Portfolio Website",
    subtitle: "Personal Project",
    desc: "You're currently viewing it! 🔥",
    skills: [
      "AngularJS",
      "TypeScript",
      "DaisyUI",
      "TailwindCSS",
      "ParticlesJS",
      "UI/UX"
    ],
    imgUrl: "",
    projectUrl: "",
    modalDesc: `This is my first time working with AngularJS and I love how structured it feels! It reminds me of making an Android app. 
    Currently, I load in the data that you see the old school way. I've stored it inside an array in the component class and loop through it
    in the template. I am working on storing my data in Firebase.`,
  }
  untube: Project = {
    title: "UnTube: A YouTube Playlist Manager",
    subtitle: "Personal Project",
    desc: "A simple, comprehensive YouTube playlist manager web app powered by YouTube Data API V3. Built with ❤ using Django, htmx and Bootstrap.",
    skills: [
      "Python",
      "Django",
      "Bootstrap5",
      "HTMX.js",
      "AJAX",
      "YouTube API",
      "Charts.js",
      "UI/UX"
    ],
    imgUrl: "assets/imgs/UnTube_dashboard.gif",
    projectUrl: "https://github.com/sleepytaco/UnTube",
    modalDesc: `UnTube utilizes the power of YouTube Data API V3 to help users manage multiple YouTube playlists with ease. UnTube offers a range of features, including the ability to log in with a Google account, bulk delete videos from playlists, address duplicate or unavailable videos, bulk copy/move videos from one playlist to another, and view charts and statistics for playlists. My goal was to create a user-friendly and efficient tool that streamlines the process of managing YouTube playlists. Through building UnTube, I deepened my expertise in web app development, API integration, and user experience design.
    `,
  }
  christmas3Dscene: Project = {
    title: "3D Indoor Christmas Scene",
    subtitle: "Computer Graphics Final Project @ Brown University",
    desc: "A 3D indoor christmas scene involving Shadow Mapping, Parallax Mapping for the walls, and Particle Effects for the fireplace.",
    skills: [
      "C++",
      "Qt Framework",
      "Computer Graphics",
      "Shadow Mapping",
      "OpenGL"
    ],
    imgUrl: "assets/imgs/Brown_CG_Christmas3DScene.png",
    projectUrl: "https://github.com/yuki-mohammed-jazeps/CS1230-Final-Project",
    modalDesc: `We built a chirstmas themed scene for our final project. Our team implemented the following features:
    Parallax Mapping (Jazeps Medina Tretmanis),
    Shadow Mapping (Mohammed Khan),
    Particle Effects (Yuki Hayashita)
    `,
  }
  textureSynthCNN: Project = {
    title: "Texture Synthesis CNN",
    subtitle: "Deep Learning Final Project @ Brown University",
    desc: "Implemented a purely CNN-based architecture in PyTorch for synthesizing variations of an input texture exemplar from a white noise image.",
    skills: [
      "Python",
      "PyTorch",
      "Deep Learning",
      "Image Synthesis",
      "CNNs"
    ],
    imgUrl: "assets/imgs/CS1470_TextureSynthCNN_POSTER.png",
    projectUrl: "https://github.com/sleepytaco/TextureSynthesisCNN",
    modalDesc: `A CNN based approach to generate variations of a texture exemplar by iteratively sampling patches from an example
      image. We implement "Texture Synthesis Through Convolutional Neural Networks and Spectrum Constraints" paper by Liu et. al. The task of image synthesis as approached in this paper is a constrained optimization problem.`,
  }
  cppRaytracer: Project = {
    title: "C++ Raytracer",
    subtitle: "Computer Graphics Course Project @ Brown University",
    desc: "Built a Raytracer in C++ that includes a pipeline for ray-object intersections and supports lighting effects, shadows, recursive reflections, and texture mapping.",
    skills: [
      "C++",
      "Qt Framework",
      "OOP",
    ],
    imgUrl: "assets/imgs/Brown_CG_Raytracer.png",
    projectUrl: "",
    modalDesc: `Implemented the.`,
  }
  bleachedCoralCNN: Project = {
    title: "Dolphin Fins Siamese Network & Bleached Coral Classifier",
    subtitle: "Computer Vision Final Project @ Brown University",
    desc: "Went through the whole ML project life cycle to solve two problems: uniquely identify dolphins based on their fins and classify if a coral is bleached.",
    skills: [
      "Python",
      "TensorFlow",
      "Deep Learning",
      "Siamese Network",
      "CNNs",
      "Google Colab",
    ],
    imgUrl: "assets/imgs/Brown_CV_FinalProjPoster.png",
    projectUrl: "",
    modalDesc: ``,
  };
  cameraProjAndTriang: Project = {
    title: "Camera Projection & Triangulation in MATLAB",
    subtitle: "Computer Vision Project @ Penn State University",
    desc: "Used MATLAB to perform camera projection and triangulation using data of a subject performing Tai Chi.",
    skills: [
      "MATLAB",
      "Computer Vision",
      "Linear Algebra",
    ],
    imgUrl: "assets/imgs/PSU_CMPEN454_Skeleton3D.png",
    projectUrl: "",
    modalDesc: `Used MATLAB to implement forward and inverse camera projection with two camera views using 3D body joints data for a set of motion capture frames of a subject performing Tai Chi exercises, along with triangulation to recover original 3D points from matching projected 2D image points.`,
  };
  aniQuote: Project =  {
    title: "Anime Quote Generator",
    subtitle: "Personal Project",
    desc: "A random anime quote generator with quotes powered by Animechan API.",
    skills: [
      "Python",
      "Django",
      "HTMX.js",
      "SQLite"
    ],
    imgUrl: "assets/imgs/AniQuote_walkthrough.gif",
    projectUrl: "https://github.com/sleepytaco/AniQuote",
    modalDesc: `A quick web app to retreive and display random quotes from Animechan API. Stored retreived quotes in an SQLite database and kept tally of the number
    of times that quote has been seen and liked. A list of top 3 most liked quotes is displayed at the bottom.`,
  };
  xkcdTextMode: Project = {
    title: "XKCD Text Mode",
    subtitle: "Android University Final Project",
    desc: "Android app that uses the XKCD API to retrieve and view a comic's transcript and image.",
    skills: [
      "Java",
      "Android Development",
      "REST APIs",
      "Parse Backend",
    ],
    imgUrl: "assets/imgs/XKCD_walkthrough.gif",
    projectUrl: "https://github.com/sleepytaco/XKCDTextMode",
    modalDesc: `This is a XKCD comic viewer that uses the XKCD API to retrieve and view a comic's transcript and image. Uses Parse as a backend to store the users progress.`,
  };
  imageManager: Project = {
    title: "Image Manager GUI",
    subtitle: "Personal Project",
    desc: "A simple python GUI app made with Tkinter which can rename, delete, and move images on Windows.",
    skills: [
      "Python",
      "Tkinter GUI",
      "Windows",
    ],
    imgUrl: "assets/imgs/ImageManagerApp.png",
    projectUrl: "https://github.com/sleepytaco/ImageManager",
    modalDesc: `A simple GUI application that can view images from a folder and manage them. Made with python3 using tkinter. 
    The user can use arrow keys to navigate through the images inside a selected folder. One of the tricky parts of this project was renaming
    an image. When performing the rename operation, or even moving an image from one folder to another, I had to make sure
    to add a number at the end if an image file with similar name already exists in the same folder or destination folder.
    `,
  };
  quickGif: Project = {
    title: "Quick GIF Maker",
    subtitle: "Personal Project",
    desc: "A simple web app made with Django that can create sharable GIFs.",
    skills: [
      "Python",
      "Django",
      "Pillow",
      "Bootstrap4",
      "JQuery",
      "AJAX"
    ],
    imgUrl: "assets/imgs/QuickGifApp.gif",
    projectUrl: "https://github.com/sleepytaco/QuickGIF",
    modalDesc: `A simple web app made with Django that can create sharable GIFs. Utilizes the Pillow library to create the gifs. Implemented the client side with Bootstrap4 and made jQuery AJAX calls to retrieve generated GIF links from the server.
    `,
  };
  mangaDownloader: Project = {
    title: "Manga Downloader",
    subtitle: "Personal Project",
    desc: "A script to download manga from mangakakalot.com and manganelo.com using browser automation with selenium.",
    skills: [
      "Python",
      "Web Scraping",
      "Browser Automation",
      "Selenium",
    ],
    imgUrl: "https://github.com/sleepytaco/manga_downloader/raw/master/walkthrough.gif?raw=true",
    projectUrl: "https://github.com/sleepytaco/manga_downloader",
    modalDesc: `Downloads manga using browser automation with selenium. Can download from the following sites: https://mangakakalot.com/, https://manganelo.com/manga/, https://m.manganelo.com.
    `,
  };
  // nittanyMarket: Project = ;

  
  projects: Project[] = [
    this.portfolio,
    this.untube,
    this.textureSynthCNN,
    this.bleachedCoralCNN,
    this.cppRaytracer,
    this.christmas3Dscene,
    this.cameraProjAndTriang,
    // this.nittanyMarket,
    this.xkcdTextMode,
    this.quickGif,
    this.aniQuote,
    this.imageManager,
    this.mangaDownloader,
  ];

  showModalByID(id: number) {
    document.getElementById(`modal_${id}`)?.classList.add("modal-open");
  }

  hideModalByID(id: number) {
    document.getElementById(`modal_${id}`)?.classList.remove("modal-open");
  }
}
