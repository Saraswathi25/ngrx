import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { getPostById } from '../store/post.selector';
import { AppState } from 'src/app/store/app.state';
import { map, Observable, switchMap } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { updatePost } from '../store/post.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit{
  constructor(private route:ActivatedRoute, private store:Store<AppState>,private router:Router){

  }
  post$!: Observable<Post >;
  postForm!:FormGroup;
  id:number;

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      map((params) => params.get('id') ),
      switchMap((id) => this.store.select(getPostById(id)))
    );
    this.post$.subscribe((post) => {
      if (!post) {
        console.log('Post not found or loading...');
      } else {
        console.log('Post loaded:', post);
        this.id = post.id ; 
      }
    });
    this.postForm =new FormGroup({
      title: new FormControl(null),
      description :new FormControl (null)
    })

  }
  onUpdate(){
    const title=this.postForm.value.title;
    const description=this.postForm.value.description;
    const post:Post={
      id:this.id,
      title,
      description
    }
    this.store.dispatch(updatePost({post}))
    this.router.navigate(['posts'])

  }
}
