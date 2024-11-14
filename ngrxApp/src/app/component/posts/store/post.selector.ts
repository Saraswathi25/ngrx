import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.state";

const getPostState =createFeatureSelector<PostState>('posts')

export const getPost=createSelector(getPostState,(state)=>{
    return state.posts;
})
export const getPostById = (id: any) =>
    createSelector(getPostState, (state) => state.posts[+id-1]);