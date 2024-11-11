import { Post } from "src/app/models/posts.model"

export interface PostState{
    posts: Post[];
}

export const initialState ={
    posts:[
        {id:1,titke:'sample',description:'desc'}
    ]
}