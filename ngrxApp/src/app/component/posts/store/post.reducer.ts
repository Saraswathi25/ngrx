import { createReducer, on } from "@ngrx/store";

import { initialState } from "./post.state";
import { addPost, deletePost, updatePost } from "./post.action";


const _postsReducer=createReducer(initialState,
    on(addPost,(state,action)=>{
        const newPost = { ...action.post, id: (state.posts.length + 1)};

        return{
            ...state,
            posts:[...state.posts,newPost]
            
        }
    }),
    on(updatePost, (state:any, action) => {
        const updatedPosts = state.posts.map((post) => {
            if (action.post.id && post.id && action.post.id === post.id) {
              return action.post;
            }
            return post;
          });
        
          return {
            ...state,
            posts: updatedPosts
          };
      }),
      on(deletePost,(state:any,action)=>{
       const updatedPost = state.posts.filter((post)=>{
        return (action.id !== post.id)
       })
        return{
          ...state,
          posts:updatedPost
        }
      })

)

export function postsReducer(state,action){
    return _postsReducer(state,action);
}