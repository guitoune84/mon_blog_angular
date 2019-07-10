import { Component, OnInit, Input } from '@angular/core';
import { PostListService } from '../services/post-list.service';
import { post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() titlePost:string;
  @Input() contentPost:string;
  @Input() lovePost:number;
  @Input() datePost:Date;
  @Input() indexOfPost:number;

  constructor(private postListService:PostListService) { }

  ngOnInit() {
  }

  loveIts() {
    this.postListService.love(this.indexOfPost);
  }

  dontLoveIts() {
    this.postListService.dontlove(this.indexOfPost);
  }

  deletePost() {
    this.postListService.removePost(this.indexOfPost);
  }

}
