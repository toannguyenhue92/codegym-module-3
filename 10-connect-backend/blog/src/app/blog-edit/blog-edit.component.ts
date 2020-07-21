import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IPost } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  post: IPost;
  postForm: FormGroup;

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      body: ['', [Validators.required, Validators.minLength(10)]]
    });
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.postService.getPostById(id).subscribe(value => {
      console.log(value);
      this.post = value;
      this.postForm.patchValue(this.post);
    });
  }

}
