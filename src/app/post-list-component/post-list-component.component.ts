import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostListService } from '../services/post-list.service';
import { Subscription } from 'rxjs';
import { post } from '../models/post.model';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  posts : post[];
  postSubscription : Subscription;

  constructor(private postListService:PostListService) {
  }

  ngOnInit(){
    this.postSubscription = this.postListService.postSubject.subscribe(
      (post: post[]) => {
        this.posts = post;
      }
    );
    this.postListService.postObservable();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
