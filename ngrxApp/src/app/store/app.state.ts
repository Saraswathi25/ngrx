import { postsReducer } from "../component/posts/store/post.reducer";
import { PostState } from "../component/posts/store/post.state";
import { counterModel } from "../shared/store/Counter";
import { counterReducer } from "../shared/store/counter.reducer";

export interface AppState{
    counter:counterModel,
    posts:PostState
}

export const appReducer ={
    counter:counterReducer,
    posts:postsReducer
}