import { RouterModule, Routes } from "@angular/router";
import { PostsComponent } from "./posts.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { NgModule } from "@angular/core";
import { postsReducer } from "./store/post.reducer";
import { StoreModule } from "@ngrx/store";


const routes: Routes = [
  
    {
      path:'',component:PostsComponent,
      children:[
        {
          path: 'add',component: AddPostComponent
        },
        {
          path: 'edit/:id',component: EditPostComponent
        }
      ]
    },
   
    
    
  ];
  


@NgModule({
    declarations: [
      AddPostComponent,
      EditPostComponent,
      PostsComponent,
      
     
    ],
    imports: [
    CommonModule, FormsModule,MaterialModule,ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('posts',postsReducer),
    ],
   
  })
export class PostsModule { }