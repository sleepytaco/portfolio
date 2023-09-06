import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { LikesService } from 'src/app/services/likes.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  loading: boolean = false;

  likeBtnClicked: boolean = false;
  likesSub: Subscription;
  currLikes: number;

  constructor(private fb: FormBuilder, public likesService: LikesService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      desc: ['', [Validators.required, Validators.minLength(6)]]
    }); 

    // subscribe to the likes observable
    this.likesSub = this.likesService.getLiveLikes().subscribe(
      datas => {
        let data: any = datas;
        this.currLikes = data.likes;
      }
    );
  }

  ngOnDestroy(): void {
    this.likesSub.unsubscribe();
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get desc() {
    return this.form.get('desc');
  }

  async onSubmit() {
    // set loading state to true to disable submit and show the spinner
    this.loading = true;

    // get raw values from form group
    const name = this.name?.value;
    const email = this.email?.value;
    const desc = this.desc?.value;

    this.loading = false;
  }
}
