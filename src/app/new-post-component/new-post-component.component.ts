import { Component, OnInit } from '@angular/core';
import { PostListService } from '../services/post-list.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.scss']
})
export class NewPostComponentComponent implements OnInit {

  formNewPost:FormGroup;
  loveIts:number;
  created_at:number;

  constructor(private postListService:PostListService, private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formNewPost = this.formBuilder.group(
      {
        titre : ['', Validators.required],
        contenu : ['', Validators.required],
      }
    )
  }

  formSubmit() {
    const valeurForm = this.formNewPost.value;
    const newPost = new post(
      valeurForm['titre'],
      valeurForm['contenu'],
      this.loveIts = this.postListService.loveIts,
      this.created_at = this.postListService.date
    );
    this.postListService.addPost(newPost);
    this.router.navigate(['/posts']);

  }

}
