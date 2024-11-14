import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
//import { AppState } from 'src/app/store/app.state';
import { getPost } from './store/post.selector';
import { deletePost } from './store/post.action';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts !:Observable<Post[]>
  constructor (private store:Store){

  }
  ngOnInit(){
    console.log("post Called")
    this.posts = this.store.select(getPost)
  }

  onDelete(id:number){

    this.store.dispatch(deletePost({id}))
  }

}
