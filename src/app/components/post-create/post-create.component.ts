import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  submitted = false;
  posts: any;
  http: HttpClient;

  frmPost = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
  })

  constructor(private router: Router, private service: PostsService) {
  }

  ngOnInit() {}

  onSubmit(e){
    e.preventDefault()
    
    this.service.getPosts().subscribe(data => {
      console.log(data);
    });

    //this.posts = this.service.getPosts();
    //console.log(this.posts);

    console.log('WALLY')
    return;
    console.log(this.frmPost)
    if(this.frmPost.status == 'INVALID'){
      console.log('INLVALID')
      this.submitted = true
    }else{
      this.router.navigate(['/home'])
    }
  }

  get title(){
    return this.frmPost.get('title');
  }

  get body(){
    return this.frmPost.get('body');
  }

}
