import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { increment } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class LikesService {

  likeBtnClicked: boolean; // bool to only allow 1 click for the like button

  constructor(private db: AngularFirestore) { 
    this.likeBtnClicked =(localStorage.getItem('likeBtnClicked') == "true") ? true : false;
  }

  toggleLikeBtnClick() {
    this.likeBtnClicked = !this.likeBtnClicked;

    if (this.likeBtnClicked) {
      this.incrementLikes();
    } else {
      this.decrementLikes();
    }

    // save the btn click status in local storage
    let boolText = (this.likeBtnClicked) ? "true" : "false";
    localStorage.setItem('likeBtnClicked',boolText);
  }

  getLiveLikes() {
    return this.db.doc(`portfolio-stats/like-count`).valueChanges();
  }

  async incrementLikes() {
    this.db.doc(`portfolio-stats/like-count`)
    .update({
      likes: increment(1),
    });
  }

  async decrementLikes() {
    this.db.doc(`portfolio-stats/like-count`)
    .update({
      likes: increment(-1),
    });
  }

  // return the likes 
  // async getNumLikes() : Promise<number> {
  //   const likeCountRef = this.db.doc('portfolio-stats/like-count');
  //   const docSnap = await getDoc(likeCountRef.ref);
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     let data: any = docSnap.data();
  //     return data.likes;
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  //   return 0;
  // }
}
