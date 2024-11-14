import { Post } from "src/app/models/posts.model"

export interface PostState{
    posts: Post[];
}

export const initialState ={
    posts:[
        {id:1,title:'sample',description:'desc'},
        {id:2,title:'sampl21',description:'desc2'}
    ]
}