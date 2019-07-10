import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { post } from '../models/post.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostListService {

  date : number = Date.now();
  loveIts : number = 0;

  postSubject = new Subject<post[]>();

  private posts : post[] = [];

  postObservable() {
    this.postSubject.next(this.posts.slice());
  }

  constructor() { 
    this.initPost();
  }

  addPost(post:post) {
    this.posts.push(post);
    this.postObservable();
    this.savePost();
  }

  savePost() {
    firebase.database().ref('/posts').set(this.posts);
    this.postObservable();
  }

  initPost() {
    firebase.database().ref('/posts').on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.postObservable();
    });
  }

  love(index:number) {
    this.posts[index].loveIts += 1;
    this.postObservable();
    this.savePost();
  }

  dontlove(index:number) {
    this.posts[index].loveIts -= 1;
    this.postObservable();
    this.savePost();
  }

  removePost(index:number) {
    this.posts.splice(index, 1);
    this.postObservable();
    this.savePost();
  }
}
