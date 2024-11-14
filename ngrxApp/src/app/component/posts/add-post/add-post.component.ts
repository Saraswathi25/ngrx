import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../store/post.action';
import { Post } from 'src/app/models/posts.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm!:FormGroup;
  constructor(private store: Store<AppState>){

  }
  
  ngOnInit(){
    this.postForm =new FormGroup({
      title: new FormControl(null, [Validators.required,Validators.minLength(6)]),
      description :new FormControl (null, [Validators.required])
    })

  }
  onSubmit(){
    console.log(this.postForm)
    if(!this.postForm.valid){
      return;
    }
    const post:Post={
      title:this.postForm.value.title,
      description:this.postForm.value.description
    }
    console.log(post)
    this.store.dispatch(addPost({post}));

  }


}
