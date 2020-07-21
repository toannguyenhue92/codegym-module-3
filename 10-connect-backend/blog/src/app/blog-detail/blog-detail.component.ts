import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  post: IPost;

  constructor(
    private activeRoute: ActivatedRoute,
    private postService: PostService) { }

  ngOnInit() {
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.postService.getPostById(id).subscribe(
      next => (this.post = next),
      error => {
        console.log(error);
        this.post = null;
      }
    );
  }

}
